import saudiArabiaImg from '../assets/images/flags/saudiArabia.jpeg'
import unitedStatesImg from '../assets/images/flags/unitedStates.jpeg'
import spainImg from '../assets/images/flags/spain.jpeg'
import netherlandsImg from '../assets/images/flags/netherlands.jpeg'
import singaporeImg from '../assets/images/flags/singapore.jpeg'
import qatarImg from '../assets/images/flags/qatar.jpeg'
import abuDhabiImg from '../assets/images/flags/abuDhabi.jpeg'

import pullingImg from '../assets/images/drivers/f1-academy/pulling.jpeg'

export const grandPrixs = [
  {
    name: 'Saudi Arabia',
    dates: {
      beginDate: '07-03-2024',
      endDate: '09-03-2024'
    },
    image: saudiArabiaImg,
    winner: 'Abbi Pulling',
    winnerImage: pullingImg
  },
  {
    name: 'Miami',
    dates: {
      beginDate: '03-05-2024',
      endDate: '05-05-2024'
    },
    image: unitedStatesImg,
    winner: 'Abbi Pulling',
    winnerImage: pullingImg
  },
  {
    name: 'Spain',
    dates: {
      beginDate: '21-06-2024',
      endDate: '23-06-2024'
    },
    image: spainImg
  },
  {
    name: 'Netherlands',
    dates: {
      beginDate: '23-08-2024',
      endDate: '25-08-2024'
    },
    image: netherlandsImg
  },
  {
    name: 'Singapore',
    dates: {
      beginDate: '20-09-2024',
      endDate: '22-09-2024'
    },
    image: singaporeImg
  },
  {
    name: 'Qatar',
    dates: {
      beginDate: '29-11-2024',
      endDate: '01-12-2024'
    },
    image: qatarImg
  },
  {
    name: 'Abu Dhabi',
    dates: {
      beginDate: '06-12-2024',
      endDate: '08-12-2024'
    },
    image: abuDhabiImg
  }
]
