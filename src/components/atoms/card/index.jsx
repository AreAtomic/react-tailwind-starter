import { ButtonPrimary, ButtonSecondary } from '../buttons';
import { HeadingTwo } from '../headings';

// TODO: icon "->" sur bouton "Voir plus"

export const CardWithoutImage = (props) => {
  return (
    <div className='w-card max-h-card-sm bg-component-500 rounded px-4 py-7'>
      <HeadingTwo color='text-blue-areatomic-500'>{props.heading}</HeadingTwo>
      <div className='mb-3'></div>
      <p className='text-white-areatomic-500 text-[17px]'>{props.text}</p>
      <ButtonSecondary className='mx-0 mt-7'>Voir plus -></ButtonSecondary>
    </div>
  );
};

export const CardWithImage = (props) => {
  return (
    <div className='w-card-sm bg-component-500 rounded px-4 py-7'>
      <HeadingTwo color='text-blue-areatomic-500'>{props.heading}</HeadingTwo>
      <div className='mb-2'></div>
      <img src={props.image} alt={props.alt} className="rounded-md" />
      <div className='mb-2'></div>
      <HeadingTwo color='text-blue-areatomic-500'>{props.price}€</HeadingTwo>
      <div className='mb-2'></div>
      <p className='text-white-areatomic-500 text-[17px]'>{props.text}</p>
      <div className='mb-10'></div>
      <div className='grid grid-cols-2 justify-items-start'>
        <ButtonPrimary className='mx-0'>Acheter</ButtonPrimary>
        <ButtonSecondary className='justify-items-start'>
          Voir plus ->
        </ButtonSecondary>
      </div>
    </div>
  );
};
