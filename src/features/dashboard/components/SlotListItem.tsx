import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Slot} from '../../../services/server/LocalServer';

export const slotListItemHeight = 50;

type SlotListItemProps = {
  item: Slot;
  onPressSlot: (item: Slot) => void;
  selectedSlots: string[];
};

export const SlotListItem: React.FC<SlotListItemProps> = ({
  item,
  onPressSlot,
  selectedSlots,
}) => {
  const onPress = () => {
    onPressSlot(item);
  };

  const isDisabled = item.isBooked;
  const isSelected = selectedSlots.includes(item.slotId);

  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[
        styles.container,
        isDisabled && styles.disabledStyle,
        isSelected && styles.selectedStyle,
      ]}
      onPress={onPress}>
      <Text style={[styles.text, isSelected && styles.selectedTextStyle]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: slotListItemHeight,
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'darkgrey',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  disabledStyle: {
    opacity: 0.5,
    backgroundColor: 'rgba(10, 132, 255, 1)',
  },
  selectedStyle: {
    backgroundColor: 'rgba(10, 132, 255, 1)',
  },
  selectedTextStyle: {
    color: 'white',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
});
