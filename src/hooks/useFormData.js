import { useState, useEffect } from 'react';
import inputJson from '../assets/input.json';

export default function useFormData(setValues) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchFormData = async () => {
      // TODO: change this to fetch from server
      const formData = inputJson;

      // sort items just in case
      formData.items = formData.items.sort((a, b) => a.itemId > b.itemId);

      setValues(makeDefaultValues(formData.items));

      setFormData(formData);
    }

    fetchFormData();
  }, [setValues]);

  return [formData, setFormData];
}

/**
 * make default answer values for each item 
 */
function makeDefaultValues(items) {
  const answers = [];

  items.forEach((item, index) => {
    switch (item.formType) {
      case 1: // checkbox can have multiple answers
        answers[index] = [];
        break;
      case 2: // radio
      case 4: // selectbox have first option selected
        answers[index] = item.options[0].id;
        break;
      case 3: // text
        answers[index] = '';
        break;
      default:
    }
  });

  return answers;
}