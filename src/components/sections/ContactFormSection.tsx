'use client';

import { forwardRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button, message } from 'antd';

type ContactFormValues = {
    name: string;
    email: string;
    company: string;
    phone: string;
    message: string;
};

const ContactFormSection = forwardRef<HTMLDivElement>((props, ref) => {
    const { control, handleSubmit, reset } = useForm<ContactFormValues>();
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = async (data: ContactFormValues) => {
        console.log('Submitted data:', data);
        try {
            setSubmitting(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            message.success('Сообщение успешно отправлено!');
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            message.error('Произошла ошибка при отправке сообщения.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div ref={ref} className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Свяжитесь с нами</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Заполните форму, и мы свяжемся с вами в ближайшее время.
                    </p>
                </div>

                <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: 'Пожалуйста, введите имя' }}
                        render={({ field, fieldState }) => (
                            <Form.Item
                                label="Имя"
                                validateStatus={fieldState.error ? 'error' : ''}
                                help={fieldState.error?.message}
                            >
                                <Input {...field} placeholder="Ваше имя" />
                            </Form.Item>
                        )}
                    />

                    {/* Email */}
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: 'Пожалуйста, введите email',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Введите корректный email',
                            },
                        }}
                        render={({ field, fieldState }) => (
                            <Form.Item
                                label="Email"
                                validateStatus={fieldState.error ? 'error' : ''}
                                help={fieldState.error?.message}
                            >
                                <Input {...field} placeholder="example@mail.com" />
                            </Form.Item>
                        )}
                    />

                    {/* Company */}
                    <Controller
                        name="company"
                        control={control}
                        render={({ field }) => (
                            <Form.Item label="Компания">
                                <Input {...field} placeholder="Название компании" />
                            </Form.Item>
                        )}
                    />

                    {/* Phone */}
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                            <Form.Item label="Телефон">
                                <Input {...field} placeholder="+7 (___) ___-__-__" />
                            </Form.Item>
                        )}
                    />

                    {/* Message */}
                    <Controller
                        name="message"
                        control={control}
                        rules={{ required: 'Пожалуйста, введите сообщение' }}
                        render={({ field, fieldState }) => (
                            <Form.Item
                                label="Сообщение"
                                validateStatus={fieldState.error ? 'error' : ''}
                                help={fieldState.error?.message}
                            >
                                <Input.TextArea {...field} rows={5} placeholder="Ваше сообщение" />
                            </Form.Item>
                        )}
                    />

                    <Form.Item className="text-center mt-6">
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={submitting}
                            size="large"
                            className="px-10"
                        >
                            Отправить
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
});

ContactFormSection.displayName = 'ContactFormSection';

export default ContactFormSection;
