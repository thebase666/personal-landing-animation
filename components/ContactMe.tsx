import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert('Please fill out missing fields');
    } else {
      window.location.href = `mailto:danielkim2711@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }
  };

  return (
    <section id='contact' className='snap-start'>
      <div className='relative flex items-center justify-center h-screen text-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Contact
        </h3>

        <div className='flex flex-col space-y-10'>

          <h4 className='text-4xl font-semibold text-center md:text-5xl'>
            Let&apos;s{' '}
            <span className='underline decoration-[#F7AB0A]/50'>Talk!</span>
          </h4>
          <div className='flex items-center justify-center space-x-4'>
            <MdEmail className='w-7 h-7 text-[#F7AB0A] animate-pulse' />

            <p className='text-2xl'>lizhuyao666@gmail.com</p>
          </div>
          <div className='flex items-center justify-center space-x-4'>
            <MdPhone className='w-7 h-7 text-[#F7AB0A] animate-pulse' />
            <p className='text-2xl'>+66-0966712286</p>
          </div>
          <div className='flex items-center justify-center space-x-4'>
            <MdPhone className='w-7 h-7 text-[#F7AB0A] animate-pulse' />
            <p className='text-2xl'>+86-13811652753</p>
          </div>
          <div className='flex items-center justify-center space-x-4'>
            <p className='text-2xl'>Wechat</p>
            <p className='text-2xl'>13811652753</p>
          </div>



        </div>
      </div>
    </section>
  );
};

export default ContactMe;
