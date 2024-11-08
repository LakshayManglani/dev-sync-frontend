import zxcvbn from 'zxcvbn';
import {
  colorBaseGreen,
  colorBaseOrange,
  colorBaseRed,
  colorBaseYellow,
} from '../../../../variables';

const PasswordStrengthIndicator = ({ password }: { password: string }) => {
  const getStrength = () => {
    if (!password) return null;

    const result = zxcvbn(password);
    const score = result.score;

    const strengthLevels = [
      { label: 'very weak', color: colorBaseRed },
      { label: 'weak', color: colorBaseOrange },
      { label: 'medium', color: colorBaseYellow },
      { label: 'strong', color: colorBaseGreen },
      { label: 'very strong', color: colorBaseGreen },
    ];

    return strengthLevels[score];
  };

  const strength = getStrength();

  return strength ? (
    <p style={{ color: strength.color }}>Password Strength: {strength.label}</p>
  ) : null;
};

export default PasswordStrengthIndicator;
