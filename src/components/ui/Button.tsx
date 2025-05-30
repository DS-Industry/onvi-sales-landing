// src/components/ui/Button.tsx
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export default function Button({
                                   children,
                                   variant = 'primary',
                                   size = 'md',
                                   fullWidth = false,
                                   className = '',
                                   ...props
                               }: ButtonProps) {
    const baseClasses = 'font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center';

    const variantClasses = {
        primary: 'bg-gradient-to-r from-accent-dark to-accent text-black hover:shadow-lg hover:opacity-90',
        secondary: 'bg-white text-black hover:bg-gray-200',
        outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10'
    };

    const sizeClasses = {
        sm: 'text-sm px-4 py-2',
        md: 'text-md px-6 py-3',
        lg: 'text-lg px-8 py-4 font-bold'
    };

    const widthClass = fullWidth ? 'w-full' : '';

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
}
