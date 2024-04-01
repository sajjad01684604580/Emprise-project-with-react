import React from 'react'
import Container from '../Container'
import Search from '../layouts/Activitieslayouts/Search'
import Filter from '../layouts/Activitieslayouts/Filter'
import Sidebar from '../layouts/Activitieslayouts/Sidebar'
import Recently from '../layouts/Activitieslayouts/Recently'

const Activities = () => {
  return (
    <section>
        <Container>
        <Search/>
        <Filter/>
        <Sidebar/>
        </Container>
        <Recently/>
    </section>
  )
}

export default Activities