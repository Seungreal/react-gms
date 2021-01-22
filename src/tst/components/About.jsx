import React from 'react'
import {PageTemplate,AboutMenu} from './index'
import {Company,History,Location,Services} from './aboutMenu/'
import { Route } from 'react-router-dom'

export default function About(){
    return <PageTemplate>
        <section>
            <Route component={AboutMenu}/>
            <Route exact path='/about' component={Company}></Route>
            <Route path='/about/history' component={History}></Route>
            <Route path='/about/location' component={Location}></Route>
            <Route path='/about/services' component={Services}></Route>
        </section>
    </PageTemplate>
}