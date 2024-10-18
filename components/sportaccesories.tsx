import React from 'react'
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Sportaccesories = () => {
  return (
    <div>
       <div className='container mx-auto py-12 '>
    <div className='font-semibold py-3 text-xl text-center '>SPORT ACCESSORIES</div>

<Carousel>
  <CarouselContent>
    <CarouselItem className='basis-1/8'><div className='shadow-2xl   rounded-xl py-5 px-4  '>
     <div className='flex '>
      
      <div className='relative'>
        <Image
        src="/sportacc.png"
        alt="sportacc"
        width={167}
        height={167}>
        </Image>
      </div>
      <div className='py-4'>
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2693 10.3601C21.9466 10.3409 20.5675 10.7243 19.4986 11.8007C18.4215 10.7264 17.0292 10.36 15.7424 10.36C12.5449 10.36 9.34375 13.0092 9.34375 16.7584C9.34375 20.3733 11.6559 23.3828 13.9427 25.4288C15.0998 26.4641 16.2865 27.2859 17.2503 27.8519C17.7319 28.1347 18.1659 28.3585 18.5201 28.5143C18.6966 28.592 18.8622 28.6567 19.0097 28.7035C19.138 28.7442 19.3189 28.7935 19.5003 28.7935C19.6817 28.7935 19.8626 28.7442 19.9909 28.7035C20.1384 28.6567 20.304 28.592 20.4805 28.5143C20.8347 28.3585 21.2687 28.1347 21.7503 27.8519C22.7141 27.2859 23.9008 26.4641 25.0579 25.4288C27.3447 23.3828 29.6568 20.3733 29.6568 16.7584C29.6568 13.0003 26.4483 10.4061 23.2693 10.3601Z" fill="#2AA952"/>
</svg>
      </div>
      </div>
      {/* <div className='absolute top-56 left-5'>
      <Image
        src="/55.png"
        alt="55 "
        width={68}
        height={68}>
        </Image>
     
      </div> */}
      <div className='justify-between flex pb-4'>
        <div className='text-grey text-xs'>1505+ brought product in this month.....</div>
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="0.5" stroke="#2AA952"/>
<circle cx="8" cy="8" r="4" fill="#2AA952"/>
</svg>
</div>
      </div>

      <div className='border-t-2 border-sucess p-4'>
        <div className='flex justify-between '>
          <div className='items-center py-1 px-2 rounded-lg text-sm text-tertiory bg-sucess'>
            Buy 1 Get 1 Free
          </div>
          <div>rating</div>
        </div>
        <div className='py-4 text-md w-[229px]'>
        MB FIT Protein Peanut Butter With High Protein( 30 Per Spoon+....... )
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex gap-1 items-center'>
            <span><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.888712 0.00195312H9.77584L8.88712 1.77938H5.98992C6.4165 2.29483 6.73644 2.89916 6.92307 3.5568H9.77584L8.88712 5.33423H7.1097C6.99956 6.44223 6.51829 7.48052 5.74397 8.28066C4.96964 9.0808 3.94768 9.59585 2.84388 9.74224V9.77779H2.22178L7.55405 15.9988H5.33227L0 9.77779V8.00036H2.22178C3.78591 8.00036 5.08343 6.84504 5.29673 5.33423H0L0.888712 3.5568H5.03011C4.53243 2.50812 3.46598 1.77938 2.22178 1.77938H0L0.888712 0.00195312Z" fill="black"/>
</svg></span>
            <span>599</span>
          </div>
          <div>
            <span></span>
            <span className='text-grey text-xs'>899</span>
          </div>
          <div className='text-sucess text-xs'>23% off</div>
        </div>

        <div className='  py-3 '>
          <button className='flex bg-secondary text-tertiory rounded-xl gap-2 items-center py-3 px-16 '>
            <div><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50015 17.0003C6.3923 17.0003 7.11553 16.2771 7.11553 15.3849C7.11553 14.4928 6.3923 13.7695 5.50015 13.7695C4.608 13.7695 3.88477 14.4928 3.88477 15.3849C3.88477 16.2771 4.608 17.0003 5.50015 17.0003Z" fill="#FEFEFE"/>
<path d="M13.3439 17.0003C14.2361 17.0003 14.9593 16.2771 14.9593 15.3849C14.9593 14.4928 14.2361 13.7695 13.3439 13.7695C12.4517 13.7695 11.7285 14.4928 11.7285 15.3849C11.7285 16.2771 12.4517 17.0003 13.3439 17.0003Z" fill="#FEFEFE"/>
<path d="M1 1.00195L2.5 1.76855L4.80769 11.9224H14.0385L16.3462 4.07625H7.57692M7.57692 8.23009H14.9615" stroke="#FEFEFE" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
<div className='text-xs'>Add to Cart</div>
          </button>
        </div>

      </div>
      </div>
</CarouselItem>
<CarouselItem className='basis-1/8'><div className='shadow-2xl   rounded-xl py-5 px-4  '>
     <div className='flex '>
      
      <div className='relative'>
        <Image
        src="/sportacc.png"
        alt="sportacc"
        width={167}
        height={167}>
        </Image>
      </div>
      <div className='py-4'>
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2693 10.3601C21.9466 10.3409 20.5675 10.7243 19.4986 11.8007C18.4215 10.7264 17.0292 10.36 15.7424 10.36C12.5449 10.36 9.34375 13.0092 9.34375 16.7584C9.34375 20.3733 11.6559 23.3828 13.9427 25.4288C15.0998 26.4641 16.2865 27.2859 17.2503 27.8519C17.7319 28.1347 18.1659 28.3585 18.5201 28.5143C18.6966 28.592 18.8622 28.6567 19.0097 28.7035C19.138 28.7442 19.3189 28.7935 19.5003 28.7935C19.6817 28.7935 19.8626 28.7442 19.9909 28.7035C20.1384 28.6567 20.304 28.592 20.4805 28.5143C20.8347 28.3585 21.2687 28.1347 21.7503 27.8519C22.7141 27.2859 23.9008 26.4641 25.0579 25.4288C27.3447 23.3828 29.6568 20.3733 29.6568 16.7584C29.6568 13.0003 26.4483 10.4061 23.2693 10.3601Z" fill="#2AA952"/>
</svg>
      </div>
      </div>
      {/* <div className='absolute top-56 left-5'>
      <Image
        src="/55.png"
        alt="55 "
        width={68}
        height={68}>
        </Image>
     
      </div> */}
      <div className='justify-between flex pb-4'>
        <div className='text-grey text-xs'>1505+ brought product in this month.....</div>
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="0.5" stroke="#2AA952"/>
<circle cx="8" cy="8" r="4" fill="#2AA952"/>
</svg>
</div>
      </div>

      <div className='border-t-2 border-sucess p-4'>
        <div className='flex justify-between '>
          <div className='items-center py-1 px-2 rounded-lg text-sm text-tertiory bg-sucess'>
            Buy 1 Get 1 Free
          </div>
          <div>rating</div>
        </div>
        <div className='py-4 text-md w-[229px]'>
        MB FIT Protein Peanut Butter With High Protein( 30 Per Spoon+....... )
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex gap-1 items-center'>
            <span><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.888712 0.00195312H9.77584L8.88712 1.77938H5.98992C6.4165 2.29483 6.73644 2.89916 6.92307 3.5568H9.77584L8.88712 5.33423H7.1097C6.99956 6.44223 6.51829 7.48052 5.74397 8.28066C4.96964 9.0808 3.94768 9.59585 2.84388 9.74224V9.77779H2.22178L7.55405 15.9988H5.33227L0 9.77779V8.00036H2.22178C3.78591 8.00036 5.08343 6.84504 5.29673 5.33423H0L0.888712 3.5568H5.03011C4.53243 2.50812 3.46598 1.77938 2.22178 1.77938H0L0.888712 0.00195312Z" fill="black"/>
</svg></span>
            <span>599</span>
          </div>
          <div>
            <span></span>
            <span className='text-grey text-xs'>899</span>
          </div>
          <div className='text-sucess text-xs'>23% off</div>
        </div>

        <div className='  py-3 '>
          <button className='flex bg-secondary text-tertiory rounded-xl gap-2 items-center py-3 px-16 '>
            <div><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50015 17.0003C6.3923 17.0003 7.11553 16.2771 7.11553 15.3849C7.11553 14.4928 6.3923 13.7695 5.50015 13.7695C4.608 13.7695 3.88477 14.4928 3.88477 15.3849C3.88477 16.2771 4.608 17.0003 5.50015 17.0003Z" fill="#FEFEFE"/>
<path d="M13.3439 17.0003C14.2361 17.0003 14.9593 16.2771 14.9593 15.3849C14.9593 14.4928 14.2361 13.7695 13.3439 13.7695C12.4517 13.7695 11.7285 14.4928 11.7285 15.3849C11.7285 16.2771 12.4517 17.0003 13.3439 17.0003Z" fill="#FEFEFE"/>
<path d="M1 1.00195L2.5 1.76855L4.80769 11.9224H14.0385L16.3462 4.07625H7.57692M7.57692 8.23009H14.9615" stroke="#FEFEFE" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
<div className='text-xs'>Add to Cart</div>
          </button>
        </div>

      </div>
      </div>
</CarouselItem>
<CarouselItem className='basis-1/8'><div className='shadow-2xl   rounded-xl py-5 px-4  '>
     <div className='flex '>
      
      <div className='relative'>
        <Image
        src="/sportacc.png"
        alt="sportacc"
        width={167}
        height={167}>
        </Image>
      </div>
      <div className='py-4'>
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2693 10.3601C21.9466 10.3409 20.5675 10.7243 19.4986 11.8007C18.4215 10.7264 17.0292 10.36 15.7424 10.36C12.5449 10.36 9.34375 13.0092 9.34375 16.7584C9.34375 20.3733 11.6559 23.3828 13.9427 25.4288C15.0998 26.4641 16.2865 27.2859 17.2503 27.8519C17.7319 28.1347 18.1659 28.3585 18.5201 28.5143C18.6966 28.592 18.8622 28.6567 19.0097 28.7035C19.138 28.7442 19.3189 28.7935 19.5003 28.7935C19.6817 28.7935 19.8626 28.7442 19.9909 28.7035C20.1384 28.6567 20.304 28.592 20.4805 28.5143C20.8347 28.3585 21.2687 28.1347 21.7503 27.8519C22.7141 27.2859 23.9008 26.4641 25.0579 25.4288C27.3447 23.3828 29.6568 20.3733 29.6568 16.7584C29.6568 13.0003 26.4483 10.4061 23.2693 10.3601Z" fill="#2AA952"/>
</svg>
      </div>
      </div>
      {/* <div className='absolute top-56 left-5'>
      <Image
        src="/55.png"
        alt="55 "
        width={68}
        height={68}>
        </Image>
     
      </div> */}
      <div className='justify-between flex pb-4'>
        <div className='text-grey text-xs'>1505+ brought product in this month.....</div>
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="0.5" stroke="#2AA952"/>
<circle cx="8" cy="8" r="4" fill="#2AA952"/>
</svg>
</div>
      </div>

      <div className='border-t-2 border-sucess p-4'>
        <div className='flex justify-between '>
          <div className='items-center py-1 px-2 rounded-lg text-sm text-tertiory bg-sucess'>
            Buy 1 Get 1 Free
          </div>
          <div>rating</div>
        </div>
        <div className='py-4 text-md w-[229px]'>
        MB FIT Protein Peanut Butter With High Protein( 30 Per Spoon+....... )
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex gap-1 items-center'>
            <span><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.888712 0.00195312H9.77584L8.88712 1.77938H5.98992C6.4165 2.29483 6.73644 2.89916 6.92307 3.5568H9.77584L8.88712 5.33423H7.1097C6.99956 6.44223 6.51829 7.48052 5.74397 8.28066C4.96964 9.0808 3.94768 9.59585 2.84388 9.74224V9.77779H2.22178L7.55405 15.9988H5.33227L0 9.77779V8.00036H2.22178C3.78591 8.00036 5.08343 6.84504 5.29673 5.33423H0L0.888712 3.5568H5.03011C4.53243 2.50812 3.46598 1.77938 2.22178 1.77938H0L0.888712 0.00195312Z" fill="black"/>
</svg></span>
            <span>599</span>
          </div>
          <div>
            <span></span>
            <span className='text-grey text-xs'>899</span>
          </div>
          <div className='text-sucess text-xs'>23% off</div>
        </div>

        <div className='  py-3 '>
          <button className='flex bg-secondary text-tertiory rounded-xl gap-2 items-center py-3 px-16 '>
            <div><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50015 17.0003C6.3923 17.0003 7.11553 16.2771 7.11553 15.3849C7.11553 14.4928 6.3923 13.7695 5.50015 13.7695C4.608 13.7695 3.88477 14.4928 3.88477 15.3849C3.88477 16.2771 4.608 17.0003 5.50015 17.0003Z" fill="#FEFEFE"/>
<path d="M13.3439 17.0003C14.2361 17.0003 14.9593 16.2771 14.9593 15.3849C14.9593 14.4928 14.2361 13.7695 13.3439 13.7695C12.4517 13.7695 11.7285 14.4928 11.7285 15.3849C11.7285 16.2771 12.4517 17.0003 13.3439 17.0003Z" fill="#FEFEFE"/>
<path d="M1 1.00195L2.5 1.76855L4.80769 11.9224H14.0385L16.3462 4.07625H7.57692M7.57692 8.23009H14.9615" stroke="#FEFEFE" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
<div className='text-xs'>Add to Cart</div>
          </button>
        </div>

      </div>
      </div>
</CarouselItem>
<CarouselItem className='basis-1/8'><div className='shadow-2xl   rounded-xl py-5 px-4  '>
     <div className='flex '>
      
      <div className='relative'>
        <Image
        src="/sportacc.png"
        alt="sportacc"
        width={167}
        height={167}>
        </Image>
      </div>
      <div className='py-4'>
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2693 10.3601C21.9466 10.3409 20.5675 10.7243 19.4986 11.8007C18.4215 10.7264 17.0292 10.36 15.7424 10.36C12.5449 10.36 9.34375 13.0092 9.34375 16.7584C9.34375 20.3733 11.6559 23.3828 13.9427 25.4288C15.0998 26.4641 16.2865 27.2859 17.2503 27.8519C17.7319 28.1347 18.1659 28.3585 18.5201 28.5143C18.6966 28.592 18.8622 28.6567 19.0097 28.7035C19.138 28.7442 19.3189 28.7935 19.5003 28.7935C19.6817 28.7935 19.8626 28.7442 19.9909 28.7035C20.1384 28.6567 20.304 28.592 20.4805 28.5143C20.8347 28.3585 21.2687 28.1347 21.7503 27.8519C22.7141 27.2859 23.9008 26.4641 25.0579 25.4288C27.3447 23.3828 29.6568 20.3733 29.6568 16.7584C29.6568 13.0003 26.4483 10.4061 23.2693 10.3601Z" fill="#2AA952"/>
</svg>
      </div>
      </div>
      {/* <div className='absolute top-56 left-5'>
      <Image
        src="/55.png"
        alt="55 "
        width={68}
        height={68}>
        </Image>
     
      </div> */}
      <div className='justify-between flex pb-4'>
        <div className='text-grey text-xs'>1505+ brought product in this month.....</div>
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="0.5" stroke="#2AA952"/>
<circle cx="8" cy="8" r="4" fill="#2AA952"/>
</svg>
</div>
      </div>

      <div className='border-t-2 border-sucess p-4'>
        <div className='flex justify-between '>
          <div className='items-center py-1 px-2 rounded-lg text-sm text-tertiory bg-sucess'>
            Buy 1 Get 1 Free
          </div>
          <div>rating</div>
        </div>
        <div className='py-4 text-md w-[229px]'>
        MB FIT Protein Peanut Butter With High Protein( 30 Per Spoon+....... )
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex gap-1 items-center'>
            <span><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.888712 0.00195312H9.77584L8.88712 1.77938H5.98992C6.4165 2.29483 6.73644 2.89916 6.92307 3.5568H9.77584L8.88712 5.33423H7.1097C6.99956 6.44223 6.51829 7.48052 5.74397 8.28066C4.96964 9.0808 3.94768 9.59585 2.84388 9.74224V9.77779H2.22178L7.55405 15.9988H5.33227L0 9.77779V8.00036H2.22178C3.78591 8.00036 5.08343 6.84504 5.29673 5.33423H0L0.888712 3.5568H5.03011C4.53243 2.50812 3.46598 1.77938 2.22178 1.77938H0L0.888712 0.00195312Z" fill="black"/>
</svg></span>
            <span>599</span>
          </div>
          <div>
            <span></span>
            <span className='text-grey text-xs'>899</span>
          </div>
          <div className='text-sucess text-xs'>23% off</div>
        </div>

        <div className='  py-3 '>
          <button className='flex bg-secondary text-tertiory rounded-xl gap-2 items-center py-3 px-16 '>
            <div><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50015 17.0003C6.3923 17.0003 7.11553 16.2771 7.11553 15.3849C7.11553 14.4928 6.3923 13.7695 5.50015 13.7695C4.608 13.7695 3.88477 14.4928 3.88477 15.3849C3.88477 16.2771 4.608 17.0003 5.50015 17.0003Z" fill="#FEFEFE"/>
<path d="M13.3439 17.0003C14.2361 17.0003 14.9593 16.2771 14.9593 15.3849C14.9593 14.4928 14.2361 13.7695 13.3439 13.7695C12.4517 13.7695 11.7285 14.4928 11.7285 15.3849C11.7285 16.2771 12.4517 17.0003 13.3439 17.0003Z" fill="#FEFEFE"/>
<path d="M1 1.00195L2.5 1.76855L4.80769 11.9224H14.0385L16.3462 4.07625H7.57692M7.57692 8.23009H14.9615" stroke="#FEFEFE" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
<div className='text-xs'>Add to Cart</div>
          </button>
        </div>

      </div>
      </div>
</CarouselItem>
<CarouselItem className='basis-1/8'><div className='shadow-2xl   rounded-xl py-5 px-4  '>
     <div className='flex '>
      
      <div className='relative'>
        <Image
        src="/sportacc.png"
        alt="sportacc"
        width={167}
        height={167}>
        </Image>
      </div>
      <div className='py-4'>
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2693 10.3601C21.9466 10.3409 20.5675 10.7243 19.4986 11.8007C18.4215 10.7264 17.0292 10.36 15.7424 10.36C12.5449 10.36 9.34375 13.0092 9.34375 16.7584C9.34375 20.3733 11.6559 23.3828 13.9427 25.4288C15.0998 26.4641 16.2865 27.2859 17.2503 27.8519C17.7319 28.1347 18.1659 28.3585 18.5201 28.5143C18.6966 28.592 18.8622 28.6567 19.0097 28.7035C19.138 28.7442 19.3189 28.7935 19.5003 28.7935C19.6817 28.7935 19.8626 28.7442 19.9909 28.7035C20.1384 28.6567 20.304 28.592 20.4805 28.5143C20.8347 28.3585 21.2687 28.1347 21.7503 27.8519C22.7141 27.2859 23.9008 26.4641 25.0579 25.4288C27.3447 23.3828 29.6568 20.3733 29.6568 16.7584C29.6568 13.0003 26.4483 10.4061 23.2693 10.3601Z" fill="#2AA952"/>
</svg>
      </div>
      </div>
      {/* <div className='absolute top-56 left-5'>
      <Image
        src="/55.png"
        alt="55 "
        width={68}
        height={68}>
        </Image>
     
      </div> */}
      <div className='justify-between flex pb-4'>
        <div className='text-grey text-xs'>1505+ brought product in this month.....</div>
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="0.5" stroke="#2AA952"/>
<circle cx="8" cy="8" r="4" fill="#2AA952"/>
</svg>
</div>
      </div>

      <div className='border-t-2 border-sucess p-4'>
        <div className='flex justify-between '>
          <div className='items-center py-1 px-2 rounded-lg text-sm text-tertiory bg-sucess'>
            Buy 1 Get 1 Free
          </div>
          <div>rating</div>
        </div>
        <div className='py-4 text-md w-[229px]'>
        MB FIT Protein Peanut Butter With High Protein( 30 Per Spoon+....... )
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex gap-1 items-center'>
            <span><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.888712 0.00195312H9.77584L8.88712 1.77938H5.98992C6.4165 2.29483 6.73644 2.89916 6.92307 3.5568H9.77584L8.88712 5.33423H7.1097C6.99956 6.44223 6.51829 7.48052 5.74397 8.28066C4.96964 9.0808 3.94768 9.59585 2.84388 9.74224V9.77779H2.22178L7.55405 15.9988H5.33227L0 9.77779V8.00036H2.22178C3.78591 8.00036 5.08343 6.84504 5.29673 5.33423H0L0.888712 3.5568H5.03011C4.53243 2.50812 3.46598 1.77938 2.22178 1.77938H0L0.888712 0.00195312Z" fill="black"/>
</svg></span>
            <span>599</span>
          </div>
          <div>
            <span></span>
            <span className='text-grey text-xs'>899</span>
          </div>
          <div className='text-sucess text-xs'>23% off</div>
        </div>

        <div className='  py-3 '>
          <button className='flex bg-secondary text-tertiory rounded-xl gap-2 items-center py-3 px-16 '>
            <div><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50015 17.0003C6.3923 17.0003 7.11553 16.2771 7.11553 15.3849C7.11553 14.4928 6.3923 13.7695 5.50015 13.7695C4.608 13.7695 3.88477 14.4928 3.88477 15.3849C3.88477 16.2771 4.608 17.0003 5.50015 17.0003Z" fill="#FEFEFE"/>
<path d="M13.3439 17.0003C14.2361 17.0003 14.9593 16.2771 14.9593 15.3849C14.9593 14.4928 14.2361 13.7695 13.3439 13.7695C12.4517 13.7695 11.7285 14.4928 11.7285 15.3849C11.7285 16.2771 12.4517 17.0003 13.3439 17.0003Z" fill="#FEFEFE"/>
<path d="M1 1.00195L2.5 1.76855L4.80769 11.9224H14.0385L16.3462 4.07625H7.57692M7.57692 8.23009H14.9615" stroke="#FEFEFE" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
<div className='text-xs'>Add to Cart</div>
          </button>
        </div>

      </div>
      </div>
</CarouselItem>
<CarouselItem className='basis-1/8'><div className='shadow-2xl   rounded-xl py-5 px-4  '>
     <div className='flex '>
      
      <div className='relative'>
        <Image
        src="/sportacc.png"
        alt="sportacc"
        width={167}
        height={167}>
        </Image>
      </div>
      <div className='py-4'>
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2693 10.3601C21.9466 10.3409 20.5675 10.7243 19.4986 11.8007C18.4215 10.7264 17.0292 10.36 15.7424 10.36C12.5449 10.36 9.34375 13.0092 9.34375 16.7584C9.34375 20.3733 11.6559 23.3828 13.9427 25.4288C15.0998 26.4641 16.2865 27.2859 17.2503 27.8519C17.7319 28.1347 18.1659 28.3585 18.5201 28.5143C18.6966 28.592 18.8622 28.6567 19.0097 28.7035C19.138 28.7442 19.3189 28.7935 19.5003 28.7935C19.6817 28.7935 19.8626 28.7442 19.9909 28.7035C20.1384 28.6567 20.304 28.592 20.4805 28.5143C20.8347 28.3585 21.2687 28.1347 21.7503 27.8519C22.7141 27.2859 23.9008 26.4641 25.0579 25.4288C27.3447 23.3828 29.6568 20.3733 29.6568 16.7584C29.6568 13.0003 26.4483 10.4061 23.2693 10.3601Z" fill="#2AA952"/>
</svg>
      </div>
      </div>
      {/* <div className='absolute top-56 left-5'>
      <Image
        src="/55.png"
        alt="55 "
        width={68}
        height={68}>
        </Image>
     
      </div> */}
      <div className='justify-between flex pb-4'>
        <div className='text-grey text-xs'>1505+ brought product in this month.....</div>
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="0.5" stroke="#2AA952"/>
<circle cx="8" cy="8" r="4" fill="#2AA952"/>
</svg>
</div>
      </div>

      <div className='border-t-2 border-sucess p-4'>
        <div className='flex justify-between '>
          <div className='items-center py-1 px-2 rounded-lg text-sm text-tertiory bg-sucess'>
            Buy 1 Get 1 Free
          </div>
          <div>rating</div>
        </div>
        <div className='py-4 text-md w-[229px]'>
        MB FIT Protein Peanut Butter With High Protein( 30 Per Spoon+....... )
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex gap-1 items-center'>
            <span><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.888712 0.00195312H9.77584L8.88712 1.77938H5.98992C6.4165 2.29483 6.73644 2.89916 6.92307 3.5568H9.77584L8.88712 5.33423H7.1097C6.99956 6.44223 6.51829 7.48052 5.74397 8.28066C4.96964 9.0808 3.94768 9.59585 2.84388 9.74224V9.77779H2.22178L7.55405 15.9988H5.33227L0 9.77779V8.00036H2.22178C3.78591 8.00036 5.08343 6.84504 5.29673 5.33423H0L0.888712 3.5568H5.03011C4.53243 2.50812 3.46598 1.77938 2.22178 1.77938H0L0.888712 0.00195312Z" fill="black"/>
</svg></span>
            <span>599</span>
          </div>
          <div>
            <span></span>
            <span className='text-grey text-xs'>899</span>
          </div>
          <div className='text-sucess text-xs'>23% off</div>
        </div>

        <div className='  py-3 '>
          <button className='flex bg-secondary text-tertiory rounded-xl gap-2 items-center py-3 px-16 '>
            <div><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50015 17.0003C6.3923 17.0003 7.11553 16.2771 7.11553 15.3849C7.11553 14.4928 6.3923 13.7695 5.50015 13.7695C4.608 13.7695 3.88477 14.4928 3.88477 15.3849C3.88477 16.2771 4.608 17.0003 5.50015 17.0003Z" fill="#FEFEFE"/>
<path d="M13.3439 17.0003C14.2361 17.0003 14.9593 16.2771 14.9593 15.3849C14.9593 14.4928 14.2361 13.7695 13.3439 13.7695C12.4517 13.7695 11.7285 14.4928 11.7285 15.3849C11.7285 16.2771 12.4517 17.0003 13.3439 17.0003Z" fill="#FEFEFE"/>
<path d="M1 1.00195L2.5 1.76855L4.80769 11.9224H14.0385L16.3462 4.07625H7.57692M7.57692 8.23009H14.9615" stroke="#FEFEFE" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
<div className='text-xs'>Add to Cart</div>
          </button>
        </div>

      </div>
      </div>
</CarouselItem>
<CarouselItem className='basis-1/8'><div className='shadow-2xl   rounded-xl py-5 px-4  '>
     <div className='flex '>
      
      <div className='relative'>
        <Image
        src="/sportacc.png"
        alt="sportacc"
        width={167}
        height={167}>
        </Image>
      </div>
      <div className='py-4'>
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2693 10.3601C21.9466 10.3409 20.5675 10.7243 19.4986 11.8007C18.4215 10.7264 17.0292 10.36 15.7424 10.36C12.5449 10.36 9.34375 13.0092 9.34375 16.7584C9.34375 20.3733 11.6559 23.3828 13.9427 25.4288C15.0998 26.4641 16.2865 27.2859 17.2503 27.8519C17.7319 28.1347 18.1659 28.3585 18.5201 28.5143C18.6966 28.592 18.8622 28.6567 19.0097 28.7035C19.138 28.7442 19.3189 28.7935 19.5003 28.7935C19.6817 28.7935 19.8626 28.7442 19.9909 28.7035C20.1384 28.6567 20.304 28.592 20.4805 28.5143C20.8347 28.3585 21.2687 28.1347 21.7503 27.8519C22.7141 27.2859 23.9008 26.4641 25.0579 25.4288C27.3447 23.3828 29.6568 20.3733 29.6568 16.7584C29.6568 13.0003 26.4483 10.4061 23.2693 10.3601Z" fill="#2AA952"/>
</svg>
      </div>
      </div>
      {/* <div className='absolute top-56 left-5'>
      <Image
        src="/55.png"
        alt="55 "
        width={68}
        height={68}>
        </Image>
     
      </div> */}
      <div className='justify-between flex pb-4'>
        <div className='text-grey text-xs'>1505+ brought product in this month.....</div>
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="0.5" stroke="#2AA952"/>
<circle cx="8" cy="8" r="4" fill="#2AA952"/>
</svg>
</div>
      </div>

      <div className='border-t-2 border-sucess p-4'>
        <div className='flex justify-between '>
          <div className='items-center py-1 px-2 rounded-lg text-sm text-tertiory bg-sucess'>
            Buy 1 Get 1 Free
          </div>
          <div>rating</div>
        </div>
        <div className='py-4 text-md w-[229px]'>
        MB FIT Protein Peanut Butter With High Protein( 30 Per Spoon+....... )
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex gap-1 items-center'>
            <span><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.888712 0.00195312H9.77584L8.88712 1.77938H5.98992C6.4165 2.29483 6.73644 2.89916 6.92307 3.5568H9.77584L8.88712 5.33423H7.1097C6.99956 6.44223 6.51829 7.48052 5.74397 8.28066C4.96964 9.0808 3.94768 9.59585 2.84388 9.74224V9.77779H2.22178L7.55405 15.9988H5.33227L0 9.77779V8.00036H2.22178C3.78591 8.00036 5.08343 6.84504 5.29673 5.33423H0L0.888712 3.5568H5.03011C4.53243 2.50812 3.46598 1.77938 2.22178 1.77938H0L0.888712 0.00195312Z" fill="black"/>
</svg></span>
            <span>599</span>
          </div>
          <div>
            <span></span>
            <span className='text-grey text-xs'>899</span>
          </div>
          <div className='text-sucess text-xs'>23% off</div>
        </div>

        <div className='  py-3 '>
          <button className='flex bg-secondary text-tertiory rounded-xl gap-2 items-center py-3 px-16 '>
            <div><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50015 17.0003C6.3923 17.0003 7.11553 16.2771 7.11553 15.3849C7.11553 14.4928 6.3923 13.7695 5.50015 13.7695C4.608 13.7695 3.88477 14.4928 3.88477 15.3849C3.88477 16.2771 4.608 17.0003 5.50015 17.0003Z" fill="#FEFEFE"/>
<path d="M13.3439 17.0003C14.2361 17.0003 14.9593 16.2771 14.9593 15.3849C14.9593 14.4928 14.2361 13.7695 13.3439 13.7695C12.4517 13.7695 11.7285 14.4928 11.7285 15.3849C11.7285 16.2771 12.4517 17.0003 13.3439 17.0003Z" fill="#FEFEFE"/>
<path d="M1 1.00195L2.5 1.76855L4.80769 11.9224H14.0385L16.3462 4.07625H7.57692M7.57692 8.23009H14.9615" stroke="#FEFEFE" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
<div className='text-xs'>Add to Cart</div>
          </button>
        </div>

      </div>
      </div>
</CarouselItem>
<CarouselItem className='basis-1/8'><div className='shadow-2xl   rounded-xl py-5 px-4  '>
     <div className='flex '>
      
      <div className='relative'>
        <Image
        src="/sportacc.png"
        alt="sportacc"
        width={167}
        height={167}>
        </Image>
      </div>
      <div className='py-4'>
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2693 10.3601C21.9466 10.3409 20.5675 10.7243 19.4986 11.8007C18.4215 10.7264 17.0292 10.36 15.7424 10.36C12.5449 10.36 9.34375 13.0092 9.34375 16.7584C9.34375 20.3733 11.6559 23.3828 13.9427 25.4288C15.0998 26.4641 16.2865 27.2859 17.2503 27.8519C17.7319 28.1347 18.1659 28.3585 18.5201 28.5143C18.6966 28.592 18.8622 28.6567 19.0097 28.7035C19.138 28.7442 19.3189 28.7935 19.5003 28.7935C19.6817 28.7935 19.8626 28.7442 19.9909 28.7035C20.1384 28.6567 20.304 28.592 20.4805 28.5143C20.8347 28.3585 21.2687 28.1347 21.7503 27.8519C22.7141 27.2859 23.9008 26.4641 25.0579 25.4288C27.3447 23.3828 29.6568 20.3733 29.6568 16.7584C29.6568 13.0003 26.4483 10.4061 23.2693 10.3601Z" fill="#2AA952"/>
</svg>
      </div>
      </div>
      {/* <div className='absolute top-56 left-5'>
      <Image
        src="/55.png"
        alt="55 "
        width={68}
        height={68}>
        </Image>
     
      </div> */}
      <div className='justify-between flex pb-4'>
        <div className='text-grey text-xs'>1505+ brought product in this month.....</div>
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="0.5" stroke="#2AA952"/>
<circle cx="8" cy="8" r="4" fill="#2AA952"/>
</svg>
</div>
      </div>

      <div className='border-t-2 border-sucess p-4'>
        <div className='flex justify-between '>
          <div className='items-center py-1 px-2 rounded-lg text-sm text-tertiory bg-sucess'>
            Buy 1 Get 1 Free
          </div>
          <div>rating</div>
        </div>
        <div className='py-4 text-md w-[229px]'>
        MB FIT Protein Peanut Butter With High Protein( 30 Per Spoon+....... )
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex gap-1 items-center'>
            <span><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.888712 0.00195312H9.77584L8.88712 1.77938H5.98992C6.4165 2.29483 6.73644 2.89916 6.92307 3.5568H9.77584L8.88712 5.33423H7.1097C6.99956 6.44223 6.51829 7.48052 5.74397 8.28066C4.96964 9.0808 3.94768 9.59585 2.84388 9.74224V9.77779H2.22178L7.55405 15.9988H5.33227L0 9.77779V8.00036H2.22178C3.78591 8.00036 5.08343 6.84504 5.29673 5.33423H0L0.888712 3.5568H5.03011C4.53243 2.50812 3.46598 1.77938 2.22178 1.77938H0L0.888712 0.00195312Z" fill="black"/>
</svg></span>
            <span>599</span>
          </div>
          <div>
            <span></span>
            <span className='text-grey text-xs'>899</span>
          </div>
          <div className='text-sucess text-xs'>23% off</div>
        </div>

        <div className='  py-3 '>
          <button className='flex bg-secondary text-tertiory rounded-xl gap-2 items-center py-3 px-16 '>
            <div><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50015 17.0003C6.3923 17.0003 7.11553 16.2771 7.11553 15.3849C7.11553 14.4928 6.3923 13.7695 5.50015 13.7695C4.608 13.7695 3.88477 14.4928 3.88477 15.3849C3.88477 16.2771 4.608 17.0003 5.50015 17.0003Z" fill="#FEFEFE"/>
<path d="M13.3439 17.0003C14.2361 17.0003 14.9593 16.2771 14.9593 15.3849C14.9593 14.4928 14.2361 13.7695 13.3439 13.7695C12.4517 13.7695 11.7285 14.4928 11.7285 15.3849C11.7285 16.2771 12.4517 17.0003 13.3439 17.0003Z" fill="#FEFEFE"/>
<path d="M1 1.00195L2.5 1.76855L4.80769 11.9224H14.0385L16.3462 4.07625H7.57692M7.57692 8.23009H14.9615" stroke="#FEFEFE" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
<div className='text-xs'>Add to Cart</div>
          </button>
        </div>

      </div>
      </div>
</CarouselItem>
<CarouselItem className='basis-1/8'><div className='shadow-2xl   rounded-xl py-5 px-4  '>
     <div className='flex '>
      
      <div className='relative'>
        <Image
        src="/sportacc.png"
        alt="sportacc"
        width={167}
        height={167}>
        </Image>
      </div>
      <div className='py-4'>
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2693 10.3601C21.9466 10.3409 20.5675 10.7243 19.4986 11.8007C18.4215 10.7264 17.0292 10.36 15.7424 10.36C12.5449 10.36 9.34375 13.0092 9.34375 16.7584C9.34375 20.3733 11.6559 23.3828 13.9427 25.4288C15.0998 26.4641 16.2865 27.2859 17.2503 27.8519C17.7319 28.1347 18.1659 28.3585 18.5201 28.5143C18.6966 28.592 18.8622 28.6567 19.0097 28.7035C19.138 28.7442 19.3189 28.7935 19.5003 28.7935C19.6817 28.7935 19.8626 28.7442 19.9909 28.7035C20.1384 28.6567 20.304 28.592 20.4805 28.5143C20.8347 28.3585 21.2687 28.1347 21.7503 27.8519C22.7141 27.2859 23.9008 26.4641 25.0579 25.4288C27.3447 23.3828 29.6568 20.3733 29.6568 16.7584C29.6568 13.0003 26.4483 10.4061 23.2693 10.3601Z" fill="#2AA952"/>
</svg>
      </div>
      </div>
      {/* <div className='absolute top-56 left-5'>
      <Image
        src="/55.png"
        alt="55 "
        width={68}
        height={68}>
        </Image>
     
      </div> */}
      <div className='justify-between flex pb-4'>
        <div className='text-grey text-xs'>1505+ brought product in this month.....</div>
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="0.5" stroke="#2AA952"/>
<circle cx="8" cy="8" r="4" fill="#2AA952"/>
</svg>
</div>
      </div>

      <div className='border-t-2 border-sucess p-4'>
        <div className='flex justify-between '>
          <div className='items-center py-1 px-2 rounded-lg text-sm text-tertiory bg-sucess'>
            Buy 1 Get 1 Free
          </div>
          <div>rating</div>
        </div>
        <div className='py-4 text-md w-[229px]'>
        MB FIT Protein Peanut Butter With High Protein( 30 Per Spoon+....... )
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex gap-1 items-center'>
            <span><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.888712 0.00195312H9.77584L8.88712 1.77938H5.98992C6.4165 2.29483 6.73644 2.89916 6.92307 3.5568H9.77584L8.88712 5.33423H7.1097C6.99956 6.44223 6.51829 7.48052 5.74397 8.28066C4.96964 9.0808 3.94768 9.59585 2.84388 9.74224V9.77779H2.22178L7.55405 15.9988H5.33227L0 9.77779V8.00036H2.22178C3.78591 8.00036 5.08343 6.84504 5.29673 5.33423H0L0.888712 3.5568H5.03011C4.53243 2.50812 3.46598 1.77938 2.22178 1.77938H0L0.888712 0.00195312Z" fill="black"/>
</svg></span>
            <span>599</span>
          </div>
          <div>
            <span></span>
            <span className='text-grey text-xs'>899</span>
          </div>
          <div className='text-sucess text-xs'>23% off</div>
        </div>

        <div className='  py-3 '>
          <button className='flex bg-secondary text-tertiory rounded-xl gap-2 items-center py-3 px-16 '>
            <div><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50015 17.0003C6.3923 17.0003 7.11553 16.2771 7.11553 15.3849C7.11553 14.4928 6.3923 13.7695 5.50015 13.7695C4.608 13.7695 3.88477 14.4928 3.88477 15.3849C3.88477 16.2771 4.608 17.0003 5.50015 17.0003Z" fill="#FEFEFE"/>
<path d="M13.3439 17.0003C14.2361 17.0003 14.9593 16.2771 14.9593 15.3849C14.9593 14.4928 14.2361 13.7695 13.3439 13.7695C12.4517 13.7695 11.7285 14.4928 11.7285 15.3849C11.7285 16.2771 12.4517 17.0003 13.3439 17.0003Z" fill="#FEFEFE"/>
<path d="M1 1.00195L2.5 1.76855L4.80769 11.9224H14.0385L16.3462 4.07625H7.57692M7.57692 8.23009H14.9615" stroke="#FEFEFE" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
<div className='text-xs'>Add to Cart</div>
          </button>
        </div>

      </div>
      </div>
</CarouselItem>
<CarouselItem className='basis-1/8'><div className='shadow-2xl   rounded-xl py-5 px-4  '>
     <div className='flex '>
      
      <div className='relative'>
        <Image
        src="/sportacc.png"
        alt="sportacc"
        width={167}
        height={167}>
        </Image>
      </div>
      <div className='py-4'>
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2693 10.3601C21.9466 10.3409 20.5675 10.7243 19.4986 11.8007C18.4215 10.7264 17.0292 10.36 15.7424 10.36C12.5449 10.36 9.34375 13.0092 9.34375 16.7584C9.34375 20.3733 11.6559 23.3828 13.9427 25.4288C15.0998 26.4641 16.2865 27.2859 17.2503 27.8519C17.7319 28.1347 18.1659 28.3585 18.5201 28.5143C18.6966 28.592 18.8622 28.6567 19.0097 28.7035C19.138 28.7442 19.3189 28.7935 19.5003 28.7935C19.6817 28.7935 19.8626 28.7442 19.9909 28.7035C20.1384 28.6567 20.304 28.592 20.4805 28.5143C20.8347 28.3585 21.2687 28.1347 21.7503 27.8519C22.7141 27.2859 23.9008 26.4641 25.0579 25.4288C27.3447 23.3828 29.6568 20.3733 29.6568 16.7584C29.6568 13.0003 26.4483 10.4061 23.2693 10.3601Z" fill="#2AA952"/>
</svg>
      </div>
      </div>
      {/* <div className='absolute top-56 left-5'>
      <Image
        src="/55.png"
        alt="55 "
        width={68}
        height={68}>
        </Image>
     
      </div> */}
      <div className='justify-between flex pb-4'>
        <div className='text-grey text-xs'>1505+ brought product in this month.....</div>
        <div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="0.5" stroke="#2AA952"/>
<circle cx="8" cy="8" r="4" fill="#2AA952"/>
</svg>
</div>
      </div>

      <div className='border-t-2 border-sucess p-4'>
        <div className='flex justify-between '>
          <div className='items-center py-1 px-2 rounded-lg text-sm text-tertiory bg-sucess'>
            Buy 1 Get 1 Free
          </div>
          <div>rating</div>
        </div>
        <div className='py-4 text-md w-[229px]'>
        MB FIT Protein Peanut Butter With High Protein( 30 Per Spoon+....... )
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex gap-1 items-center'>
            <span><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.888712 0.00195312H9.77584L8.88712 1.77938H5.98992C6.4165 2.29483 6.73644 2.89916 6.92307 3.5568H9.77584L8.88712 5.33423H7.1097C6.99956 6.44223 6.51829 7.48052 5.74397 8.28066C4.96964 9.0808 3.94768 9.59585 2.84388 9.74224V9.77779H2.22178L7.55405 15.9988H5.33227L0 9.77779V8.00036H2.22178C3.78591 8.00036 5.08343 6.84504 5.29673 5.33423H0L0.888712 3.5568H5.03011C4.53243 2.50812 3.46598 1.77938 2.22178 1.77938H0L0.888712 0.00195312Z" fill="black"/>
</svg></span>
            <span>599</span>
          </div>
          <div>
            <span></span>
            <span className='text-grey text-xs'>899</span>
          </div>
          <div className='text-sucess text-xs'>23% off</div>
        </div>

        <div className='  py-3 '>
          <button className='flex bg-secondary text-tertiory rounded-xl gap-2 items-center py-3 px-16 '>
            <div><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50015 17.0003C6.3923 17.0003 7.11553 16.2771 7.11553 15.3849C7.11553 14.4928 6.3923 13.7695 5.50015 13.7695C4.608 13.7695 3.88477 14.4928 3.88477 15.3849C3.88477 16.2771 4.608 17.0003 5.50015 17.0003Z" fill="#FEFEFE"/>
<path d="M13.3439 17.0003C14.2361 17.0003 14.9593 16.2771 14.9593 15.3849C14.9593 14.4928 14.2361 13.7695 13.3439 13.7695C12.4517 13.7695 11.7285 14.4928 11.7285 15.3849C11.7285 16.2771 12.4517 17.0003 13.3439 17.0003Z" fill="#FEFEFE"/>
<path d="M1 1.00195L2.5 1.76855L4.80769 11.9224H14.0385L16.3462 4.07625H7.57692M7.57692 8.23009H14.9615" stroke="#FEFEFE" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
<div className='text-xs'>Add to Cart</div>
          </button>
        </div>

      </div>
      </div>
</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    

      

      

      
      </div>
      
    </div>
   
  )
}

export default Sportaccesories
