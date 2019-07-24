import { useState, useEffect } from 'react';
import inputJson from '../assets/input.json';
import { Checkbox, Radio, Text, Selectbox } from '../components/item';

export default function useFormData(setItems) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchFormData = async () => {
      // TODO: change this to fetch from server
      const formData = inputJson;

      // sort items just in case
      formData.items = formData.items.sort((a, b) => a.itemId > b.itemId);

      // initiate items with their data
      const itemConstructors = [null, Checkbox, Radio, Text, Selectbox];
      setItems(
        formData.items.map(
          item => itemConstructors[item.formType](item)
        )
      );

      setFormData(formData);
    }

    fetchFormData();
  }, [setItems]);

  return [formData, setFormData];
}