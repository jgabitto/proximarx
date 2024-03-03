import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
              {item.subtitle2 && (
                <Typography color="text.secondary">{item.subtitle2}</Typography>
              )}
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Content = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Services'}
          items={[
            {
              title: 'TX Workers’ Compensation',
              subtitle:
                'A claim denial by an insurance carrier is not the final word. If an insurance carrier denies a request or claim for medical treatment, Texas workers’ compensation patients have the right to appeal the decision to the insurance carrier itself and, if necessary, to the Texas Department of Insurance. Unlike most retail pharmacies, we do not discontinue filling our patients’ prescriptions after their claim is denied by the insurance carrier. ',
              subtitle2:
                'We continue prescription care while appealing our patients’ claims on their behalf. Our patients continue to receive their medications while we exhaust all efforts to reverse denial decisions. Our patients don’t have to worry about coordinating care and payment with their workers’ compensation insurance. We manage and monitor the status of each claim so that our patients can focus on their most important task: recovering.',
            },
            {
              title: 'Personal Injury',
              subtitle:
                'If you are involved in a personal injury lawsuit and receiving treatment, we are your pharmacy destination.',
            },
            {
              title: 'Home Delivery',
              subtitle:
                'No wait, no lines, no traffic. Your medication will be delivered right to your door at  no cost to you. Let us know your delivery preferences and we will schedule a delivery time convenient for you. We offer same day delivery if your prescription is received by 2pm. If not, no worries! We offer next day shipping and delivery.',
            },
            {
              title: 'Medication Therapy Management (MTM)',
              subtitle:
                'We are now offering Medication Therapy Management (MTM) at No Cost! MTM is a distinct service or group of services that optimize therapeutic outcomes for individual patients. MTM encompasses a broad range of professional activities and responsibilities within the licensed pharmacist’s scope of practice. Unlike the traditional dispensing of medication, MTM is patient-centered rather than product-focused. What does this mean for you, our patient?  Our pharmacist will review your medication list and other medical history to identify and prioritize medication-related problems. Should a medication-related problem be uncovered, our pharmacist may recommend a medication change or provide a Medication-related Action Plan (MAP).',
            },
            {
              title: 'Over-the-Counter',
              subtitle:
                'Need to stock up your medicine cabinet? Call and order with us and we will deliver to your door.',
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Content;
