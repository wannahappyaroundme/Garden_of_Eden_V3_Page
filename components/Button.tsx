/**
 * Reusable button components with consistent styling
 */

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

/**
 * Primary gradient button (purple/violet)
 */
export function PrimaryButton({ children, onClick, className = '', ...props }: ButtonProps) {
  const baseClasses = "bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold py-4 px-10 rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105";

  if (props.href) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={`${baseClasses} ${className} inline-block text-center`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type={props.type || 'button'}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}

/**
 * Secondary outline button (purple border)
 */
export function SecondaryButton({ children, onClick, className = '', ...props }: ButtonProps) {
  const baseClasses = "bg-transparent border-2 border-purple-600 text-purple-700 font-bold py-4 px-10 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105";

  if (props.href) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={`${baseClasses} ${className} inline-block text-center`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type={props.type || 'button'}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}

/**
 * Large CTA button (for final call-to-actions)
 */
export function CTAButton({ children, onClick, className = '', ...props }: ButtonProps) {
  const baseClasses = "bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-xl py-5 px-12 rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/40 hover:scale-105";

  if (props.href) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={`${baseClasses} ${className} inline-block text-center`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type={props.type || 'button'}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}
