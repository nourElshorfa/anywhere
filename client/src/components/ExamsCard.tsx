
import { Typography, Button, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ExamsCard = () => {
  const { t } = useTranslation();

  return (
    <Paper
      elevation={2}
      sx={{
        backgroundColor: 'white',
        borderRadius: 3,
        p: 3,
        mb: 3,
      }}
    >
      <Typography
        variant="h6"
        fontWeight="700"
        color="primary"
        sx={{ mb: 1 }}
      >
        {t('exams_time')}
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        {t('exam_message')}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: 2,
          textTransform: 'none',
          px: 3,
          py: 1,
        }}
      >
        {t('view_tips')}
      </Button>
    </Paper>
  );
};

export default ExamsCard;
