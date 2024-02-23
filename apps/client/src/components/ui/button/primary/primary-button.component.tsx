import { BaseButton } from '..'
import { type TBaseButtonProps } from '../base-button.models'

type TPrimaryButtonProps = TBaseButtonProps

export function PrimaryButton({
  children,
  loading,
  disabled,
  className,
  ...props
}: TPrimaryButtonProps) {
  return (
    <BaseButton
      loading={loading}
      disabled={disabled}
      className={['bg-neutral-800 text-neutral-50 py-2 px-4', className].join(
        ' '
      )}
      {...props}
    >
      {children}
    </BaseButton>
  )
}
