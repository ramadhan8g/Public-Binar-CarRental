import React, { useEffect } from 'react'
import CarList from './components/CarList'
import FromFillter from '../../../components/from-filter/FromFilter'
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';
import { carSelectors, getAllCars } from '../../../features/carSlice';
import Banner from '../../home/components/Banner';
import NavbarLayout from '../../../components/layouts/Navbar';
import FooterLayout from '../../../components/layouts/Footer';

export default function CarListPage() {
  const dispatch = useDispatch();
  const loading = useSelector(carSelectors.loading);
  
  const data = useSelector(carSelectors.selectAllCars);
  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  const onFilter = (payload) => {
    dispatch(getAllCars(payload));
  };

  return (
    <>
    <NavbarLayout/>
    <Banner />
      <FromFillter onSubmit={onFilter} />
     {loading ? (
        <LoadingSpinner />
      ) : (
        <>{data.cars !== undefined && <CarList cars={data.cars} />}</>
      )} 
      <FooterLayout/> 

    </>
  );
}