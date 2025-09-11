import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowLeft, Save, Plus, Edit, Trash2 } from 'lucide-react';

interface FormProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  onCancel?: () => void;
  loading?: boolean;
  submitText?: string;
  submitIcon?: ReactNode;
  showBackButton?: boolean;
  onBack?: () => void;
  backText?: string;
  variant?: 'create' | 'edit' | 'view';
  className?: string;
}

const Form: React.FC<FormProps> = ({
  title,
  subtitle,
  children,
  onSubmit,
  onCancel,
  loading = false,
  submitText = 'Save',
  submitIcon,
  showBackButton = false,
  onBack,
  backText = 'Back',
  variant = 'create',
  className = '',
}) => {
  const getSubmitIcon = () => {
    if (submitIcon) return submitIcon;
    switch (variant) {
      case 'create':
        return <Plus className="h-4 w-4" />;
      case 'edit':
        return <Edit className="h-4 w-4" />;
      default:
        return <Save className="h-4 w-4" />;
    }
  };

  const getSubmitText = () => {
    if (submitText) return submitText;
    switch (variant) {
      case 'create':
        return 'Create';
      case 'edit':
        return 'Update';
      default:
        return 'Save';
    }
  };

  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>{backText}</span>
              </Button>
            )}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {title}
              </h1>
              {subtitle && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {variant === 'create' ? 'Create New' : variant === 'edit' ? 'Edit' : 'View'} {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {children}
          </CardContent>
        </Card>

        {/* Form Actions */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-3">
            {onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                disabled={loading}
              >
                Cancel
              </Button>
            )}
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              type="submit"
              disabled={loading}
              className="flex items-center space-x-2"
            >
              {getSubmitIcon()}
              <span>{loading ? 'Saving...' : getSubmitText()}</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
