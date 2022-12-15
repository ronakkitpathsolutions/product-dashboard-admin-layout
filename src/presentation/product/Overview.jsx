import React from 'react'
import useOverview from '../../components/product/overview'
import ProductLoading from '../../components/product/ProductLoading'
import useFetch from '../../hooks/useFetch'
import loading from '../../assets/load.svg'
import ProductOverview from './ProductOverview'

const Overview = ({ ...props }) => {
  const { id } = useOverview()
  const { data, isLoading } = useFetch(`/all-products/get/${id}`)  
  return ( isLoading ? <ProductLoading {...{ loading }} /> : 
    <ProductOverview {...{data, id}} className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 hide-scroll" />
  )
}

export default Overview