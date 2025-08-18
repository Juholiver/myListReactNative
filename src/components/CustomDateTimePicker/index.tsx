import React, {useEffect, useState}  from "react";
import { Modal, Platform, View } from "react-native";

import { style } from "./style";
import DateTimePicker from '@react-native-community/datetimepicker';





interface CustomDateTimePickerProps {
  type: "date" | "time" | "datetime";
  onDateChange: (date: Date) => void;
  show: boolean;
  setshow: (show: boolean) => void;
}


const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = ({type, onDateChange, show, setshow}) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    if (onDateChange) {
      onDateChange(date);
    }
  }, [date,onDateChange]);
  const onchange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setshow(false);
  };

  return (
    <Modal transparent={true} visible={show} onRequestClose={() => setshow(false)}>
      <View style={style.modalOverlay}>
        <View style={[style.container, Platform.OS === "android" && {backgroundColor:"transparent"}]}>
          <DateTimePicker value={date} mode={type} display={Platform.OS === "ios" ? "inline" : "default"} onChange={onchange} />
        </View>
      </View>
    </Modal>
  );
};

export default CustomDateTimePicker;
