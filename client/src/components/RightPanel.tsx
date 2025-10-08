import { Box, Typography, Button, Paper, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

const RightPanel = () => {
  const { t } = useTranslation();

  return (
    <Box p={4} my={5}>
      {/* ====== أول Card ====== */}
      <Paper
        elevation={2}
        sx={{
          borderRadius: 3,
          p: 3,
        }}
      >
        <Typography variant="h6" fontWeight="600" color="text.primary" mb={2}>
          {t('rightpanel.whats_due')}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          {t('rightpanel.assignments_due')}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Box>
          <Typography variant="subtitle1" fontWeight="500" color="text.primary">
            {t('rightpanel.unit_quiz')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('rightpanel.quiz_details')}
          </Typography>

          <Typography variant="subtitle1" fontWeight="500" color="text.primary">
            {t('rightpanel.unit_quiz')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('rightpanel.quiz_details')}
          </Typography>

          <Button
            variant="contained"
            color="success"
            sx={{ mt: 2, textTransform: 'none', borderRadius: 2 }}
          >
            {t('rightpanel.start_quiz')}
          </Button>
        </Box>
      </Paper>

      {/* ====== ثاني Card ====== */}
      <Paper
        elevation={2}
        sx={{
          borderRadius: 3,
          p: 3,
          mt: 3,
        }}
      >
        <Typography variant="h6" fontWeight="600" color="text.primary" mb={2}>
          {t('rightpanel.whats_due')}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          {t('rightpanel.assignments_due')}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Box>
          <Typography variant="subtitle1" fontWeight="500" color="text.primary">
            {t('rightpanel.unit_quiz')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('rightpanel.quiz_details')}
          </Typography>

          <Typography variant="subtitle1" fontWeight="500" color="text.primary">
            {t('rightpanel.unit_quiz')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('rightpanel.quiz_details')}
          </Typography>

          <Button
            variant="contained"
            color="success"
            sx={{ mt: 2, textTransform: 'none', borderRadius: 2 }}
          >
            {t('rightpanel.take_assignment')}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default RightPanel;
