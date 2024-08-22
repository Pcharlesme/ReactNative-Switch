import React from 'react';
interface SmartSwitchProps {
    isEnabled: boolean;
    toggleSwitch: () => void;
    trackColor?: {
        false: string;
        true: string;
    };
    thumbColorEnabled?: string;
    thumbColorDisabled?: string;
    style?: any;
    showLabels?: boolean;
}
declare const SmartSwitch: React.FC<SmartSwitchProps>;
export default SmartSwitch;
