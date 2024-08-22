import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

interface SmartSwitchProps {
  isEnabled: boolean;                          // Switch state
  toggleSwitch: () => void;                    // Function to toggle the switch
  trackColor?: { false: string; true: string }; // Customizable track color for the switch
  thumbColorEnabled?: string;                  // Thumb color when the switch is enabled
  thumbColorDisabled?: string;                 // Thumb color when the switch is disabled
  style?: any;                                 // Optional custom styles for the wrapper
  showLabels?: boolean;                        // Show ON/OFF labels inside the thumb
}

const SmartSwitch: React.FC<SmartSwitchProps> = ({
  isEnabled,
  toggleSwitch,
  trackColor = { false: '#767577', true: '#81b0ff' },
  thumbColorEnabled = '#f5dd4b',
  thumbColorDisabled = '#f4f3f4',
  style,
  showLabels = true, 
}) => {
  const translateX = new Animated.Value(isEnabled ? 26 : 0);

  const handleToggle = () => {
    Animated.timing(translateX, {
      toValue: isEnabled ? 0 : 20,
      duration: 200,
      useNativeDriver: true,
    }).start();
    toggleSwitch();
  };

  return (
    <TouchableOpacity
      style={[styles.switchContainer, { backgroundColor: isEnabled ? trackColor.true : trackColor.false }, style]}
      onPress={handleToggle}
      activeOpacity={0.8}
    >
      <Animated.View
        style={[
          styles.thumb,
          {
            transform: [{ translateX }],
            backgroundColor: isEnabled ? thumbColorEnabled : thumbColorDisabled,
          },
        ]}
      >
        {showLabels && (
          <Text style={styles.label}>
            {isEnabled ? 'ON' : 'OFF'}
          </Text>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 60,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SmartSwitch;
