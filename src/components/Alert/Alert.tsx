import cn from '@/lib/clsx';
import { HTMLAttributes } from 'react';
import { Button } from '../Button/Button';
import { getBackgroundClass } from '@/utils/variant';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'success' | 'warning' | 'danger';
    classname?: string;
    title: string;
    label: string;
}

export const Alert = ({ title, label, variant, classname }: AlertProps) => {
    const variantClass = getBackgroundClass(variant)
    console.log(variantClass)

    return (
        <div
            className={cn(
                'rounded-xl px-2 py-1 text-black w-[560px] h-[86px] border flex gap-2',
                variantClass,
                classname
            )}
        >
            <div className="flex space-x-2">
                <div>
                    <h1 className='text-2xl font-semibold mb-2'>{title}</h1>
                    <p className='text-base font-medium'>{label}</p>
                </div>
                <Button
                    label="Label"
                    variant={variant}
                />
            </div>
        </div>
    );
};
