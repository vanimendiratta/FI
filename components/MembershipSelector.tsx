"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"





interface BasePackage {
  title: string;
  price: number;
  duration: string;
  features: string[];
  bgColor: string;
  buttonColor: string;
}

interface GymPackage extends BasePackage {
  type: 'gym';
}

interface BadmintonPackage extends BasePackage {
  type: 'badminton';
  location: string;
  image: string;
}

type Package = GymPackage | BadmintonPackage;

const gymPackages: GymPackage[] = [
  {
    type: 'gym',
    title: '1 Month Package',
    price: 3500,
    duration: 'per month, billed annually',
    features: ['Unlimited Gym Access', '2x Fitness Consultant', 'Nutrition Tracking', '1x Free Supplement', '3 Days Per Week', 'Personal Trainer'],
    bgColor: 'bg-teritory',
    buttonColor: 'bg-success',
  },
  {
    type: 'gym',
    title: '3 Month Package',
    price: 5500,
    duration: 'per month, billed annually',
    features: ['Unlimited Gym Access', '4x Fitness Consultant', 'Nutrition Tracking', '3x Free Supplement', '5 Days Per Week', 'Personal Trainer'],
    bgColor: 'bg-teritory',
    buttonColor: 'bg-success',
  },
  {
    type: 'gym',
    title: '6 Month Package',
    price: 7500,
    duration: 'per month, billed annually',
    features: ['Unlimited Gym Access', '7x Fitness Consultant', 'Nutrition Tracking', '5x Free Supplement', 'Gym Card', 'Personal Trainer'],
    bgColor: 'bg-[linear-gradient(to right, #FF5F6D, #FFC371)]', 
    buttonColor: 'bg-secondary',
  },
  {
    type: 'gym',
    title: '1 Year Package',
    price: 11500,
    duration: 'per year, billed annually',
    features: ['Unlimited Gym Access', 'Free Clothes', 'All Training Program', 'Free Fitness Consultant', 'Free Supplement', 'Gym Card'],
    bgColor: 'bg-[linear-gradient(to right, #36D1DC, #5B86E5)]', 
    buttonColor: 'bg-secondary',
  },
];

const badmintonPackages: BadmintonPackage[] = [
  {
    type: 'badminton',
    title: 'Per Day Package',
    price: 100,
    duration: '',
    location: '14 Al Rajiv, Across from House of Wood, Delhi',
    image: '/badmintoncard1.png',
    features: [],
    bgColor: 'bg-teritory',
    buttonColor: 'bg-success',
  },
  {
    type: 'badminton',
    title: '1 Month Package',
    price: 1000,
    duration: '',
    location: 'Sector 48, Sohna Road XYZ Park, Gurgaon',
    image: '/badmintoncard2.png',
    features: [],
    bgColor: 'bg-teritory',
    buttonColor: 'bg-success',
  },
  {
    type: 'badminton',
    title: '3 Month Package',
    price: 2200,
    duration: '',
    location: 'Sector 32, Isamlpur Medanta Hospital, Gurgaon',
    image: '/badmintoncard3.png',
    features: [],
    bgColor: 'bg-[linear-gradient(to right, #8A2387, #E94057, #F27121)]',
    buttonColor: 'bg-secondary',
  },
  {
    type: 'badminton',
    title: '1 Year Package',
    price: 8500,
    duration: '',
    location: 'Sector 21, Near Park School Bahadurgarh',
    image: '/badmintoncard4.png',
    features: [],
    bgColor: 'bg-teritory',
    buttonColor: 'bg-success',
  },
];

const MembershipPackage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gym' | 'badminton'>('gym');

  const renderPackage = (pkg: Package) => (
    <Card key={pkg.title} className={`w-64 m-2 ${pkg.bgColor}`}>
      <CardHeader>
        <h3 className="text-lg font-semibold">{pkg.title}</h3>
        <p className="text-2xl font-bold text-green-500">₹{pkg.price}</p>
        <p className="text-sm text-gray-500">{pkg.duration}</p>
      </CardHeader>
      <CardContent>
        {pkg.type === 'badminton' && pkg.image && (
          <div className="relative w-full h-32 mb-2">
            <Image
              src={pkg.image}
              alt={pkg.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        {pkg.type === 'badminton' && <p className="text-sm mb-2">{pkg.location}</p>}
        {pkg.type === 'gym' && (
          <ul className="list-none text-sm space-y-1">
            {pkg.features.map((feature, index) => (
              <li key={index} className="before:content-['✓'] before:mr-2 before:text-green-500">
                {feature}
              </li>
            ))}
          </ul>
        )}
        <Button className="mt-4 w-full">
          {pkg.type === 'gym' ? 'Register Now' : 'Book Now'}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-4 shadow-xl rounded-xl ">
      <div className="mb-4 flex justify-center gap-2">
        <Button
          onClick={() => setActiveTab('gym')}
          variant={activeTab === 'gym' ? 'default' : 'outline'}
          className="mr-2 bg-teritory hover:bg-success border border-input hover:text-accent-foreground"
        >
          Gym Membership
        </Button>
        <Button
          onClick={() => setActiveTab('badminton')}
          variant={activeTab === 'badminton' ? 'default' : 'outline'}
          className="mr-2 bg-teritory hover:bg-success"
        >
          Badminton Slot Booking
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {activeTab === 'gym'
          ? gymPackages.map(renderPackage)
          : badmintonPackages.map(renderPackage)}
      </div>
    </div>
  );
};
export default MembershipPackage