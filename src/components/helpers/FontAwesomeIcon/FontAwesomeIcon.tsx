// Global
import { FontAwesomeIconProps as FontAwesomeIconPropsInternal } from '@fortawesome/react-fontawesome';
import { ReactElement, useEffect, useState } from 'react';

export type FontAwesomeIconProps = FontAwesomeIconPropsInternal;

const FontAwesomeIcon = ({
  beat,
  beatFade,
  border,
  bounce,
  className,
  color,
  fade,
  fixedWidth,
  flip,
  icon,
  inverse,
  listItem,
  mask,
  maskId,
  pull,
  pulse,
  rotation,
  shake,
  size,
  spin,
  spinPulse,
  spinReverse,
  style,
  swapOpacity,
  symbol,
  tabIndex,
  title,
  titleId,
  transform,
}: FontAwesomeIconProps): ReactElement => {
  const [FontAwesomeIconInternal, setFontAwesomeIconInternal] = useState<any | null>(null);

  useEffect(() => {
    import('@fortawesome/react-fontawesome').then((module) => {
      setFontAwesomeIconInternal(module.FontAwesomeIcon);
    });
  }, []);

  if (!FontAwesomeIconInternal) {
    // You can return a loading state or placeholder here if needed.
    return <></>;
  }
  return (
    <FontAwesomeIconInternal
      beat={beat}
      beatFade={beatFade}
      border={border}
      bounce={bounce}
      className={className}
      color={color}
      fade={fade}
      fixedWidth={fixedWidth}
      flip={flip}
      icon={icon}
      inverse={inverse}
      listItem={listItem}
      mask={mask}
      maskId={maskId}
      pull={pull}
      pulse={pulse}
      rotation={rotation}
      shake={shake}
      size={size}
      spin={spin}
      spinPulse={spinPulse}
      spinReverse={spinReverse}
      style={style}
      swapOpacity={swapOpacity}
      symbol={symbol}
      tabIndex={tabIndex}
      title={title}
      titleId={titleId}
      transform={transform}
    />
  );
};

export default FontAwesomeIcon;
