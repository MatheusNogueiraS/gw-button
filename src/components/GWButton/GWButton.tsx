import type { ComponentPropsWithRef, ReactNode } from 'react'
import './GWButton.css'

export type GWButtonType = 'primary' | 'secondary' | 'label' | 'link'
export type GWButtonSize = 'small' | 'medium' | 'large'

export interface GWButtonProps
  extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  children: ReactNode
  /** Figma "type" variant. */
  variant?: GWButtonType
  size?: GWButtonSize
  inverse?: boolean
  /** Skeleton shimmer while content is loading. Keeps the button width. */
  loading?: boolean
  /** Action in flight: disabled look with a spinner replacing the label. */
  processing?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export function GWButton({
  children,
  variant = 'primary',
  size = 'medium',
  inverse = false,
  loading = false,
  processing = false,
  iconLeft,
  iconRight,
  type = 'button',
  disabled,
  className,
  ...rest
}: GWButtonProps) {
  const isInert = disabled || loading || processing
  const classes = [
    'gw-button',
    `gw-button--${variant}`,
    `gw-button--${size}`,
    inverse && 'gw-button--inverse',
    loading && 'gw-button--loading',
    processing && 'gw-button--processing',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      {...rest}
      type={type}
      className={classes}
      disabled={isInert}
      aria-busy={loading || processing || undefined}
    >
      {processing ? (
        <span className="gw-button__spinner" aria-hidden="true" />
      ) : (
        <>
          {iconLeft && <span className="gw-button__icon">{iconLeft}</span>}
          <span className="gw-button__label">{children}</span>
          {iconRight && <span className="gw-button__icon">{iconRight}</span>}
        </>
      )}
    </button>
  )
}
