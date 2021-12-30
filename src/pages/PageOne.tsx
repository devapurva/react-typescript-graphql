import { Icon } from "@iconify/react";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import buildingInsights2 from "@iconify/icons-carbon/building-insights-2";
// material
import {
  experimentalStyled as styled,
  useTheme,
} from "@material-ui/core/styles";
import { Box, Container, Stack, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import { useQuery } from "@apollo/client";
import { GET_JOBS_LIST } from "apolloClient/api/getJobs";
import { IJob } from "../@types/job";
import LoadingScreen from "../components/LoadingScreen";
import Scrollbar from "../components/Scrollbar";
import Label from "../components/Label";
import { useState } from "react";
import { randomLabelColor } from "../utils/common";
import { LabelColor } from "../@types/theme";

// ----------------------------------------------------------------------

const PageTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
}));

function JobItem({ job }: { job: IJob }) {
  const theme = useTheme();
  const { company, title, remotes, cities, countries, tags } = job;
  const [imgError, setImgError] = useState(false);

  const isoCode =
    cities?.[0]?.country?.isoCode || countries?.[0]?.isoCode || "";

  const logoError = () => {
    setImgError(true);
  };

  const labelColor: LabelColor = randomLabelColor();

  console.log(typeof labelColor);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {/* company logo container */}
      <Box
        sx={{
          width: 60,
          height: 60,
          flexShrink: 0,
          display: "flex",
          borderRadius: 1.5,
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.neutral",
        }}
      >
        {company.logoUrl && !imgError && (
          <img
            src={company.logoUrl}
            alt={title}
            width={58}
            height={58}
            style={{ borderRadius: 12 }}
            onError={logoError}
          />
        )}
        {(imgError || !company.logoUrl) && (
          <Icon
            color={`${theme.palette.primary}`}
            width={24}
            height={24}
            icon={buildingInsights2}
          />
        )}
      </Box>

      <Box sx={{ flexGrow: 1, minWidth: 160 }}>
        <Typography variant="h3">{title}</Typography>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ mt: 0.5, color: "text.secondary", mb: 0.5 }}
        >
          <Typography variant="subtitle1" sx={{ ml: 0.5, mr: 1 }}>
            {company.name}
          </Typography>
        </Stack>

        {tags?.length > 0 &&
          labelColor &&
          tags?.map((tag) => (
            <Label
              sx={{ mr: 0.5 }}
              key={tag.id}
              variant={theme.palette.mode === "light" ? "ghost" : "filled"}
              color={labelColor}
            >
              {tag.name}
            </Label>
          ))}
      </Box>

      <Stack alignItems="flex-end" sx={{ pr: 3 }}>
        {(cities?.[0] || countries?.[0]) && (
          <Typography variant="h5" sx={{ mt: 0.5, color: "text.secondary" }}>
            {getUnicodeFlagIcon(`${isoCode}`)}
            {cities?.[0] && cities?.[0]?.name}
            {countries?.[0] && countries?.[0]?.name}
          </Typography>
        )}
        {remotes?.length > 0 && (
          <Label
            variant={theme.palette.mode === "light" ? "ghost" : "filled"}
            color="info"
          >
            Remote
          </Label>
        )}
      </Stack>
    </Stack>
  );
}

export default function PageOne() {
  const { data, loading, error } = useQuery(GET_JOBS_LIST);

  return (
    <Page title="GraphQL Jobs">
      <Container maxWidth="xl">
        <PageTitle variant="h1">GraphQL Jobs</PageTitle>

        {loading && (
          <LoadingScreen
            sx={{
              top: 0,
              left: 0,
              width: 1,
              backgroundColor: "transparent",
              position: "absolute",
            }}
          />
        )}
        <Scrollbar>
          <Stack spacing={6} sx={{ p: 3, m: 10 }}>
            {console.log(data, typeof data)}
            {!loading &&
              data &&
              data.jobs.map((job: IJob, index: number) => {
                return <JobItem key={job.id} job={job} />;
              })}
          </Stack>
        </Scrollbar>
      </Container>
    </Page>
  );
}
