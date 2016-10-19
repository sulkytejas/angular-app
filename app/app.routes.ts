import {provideRouter,RouterConfig} from "@angular/router"
import {AboutComponent} from './about.component'
import {RacesComponent} from './races.component'
import {PhotosComponent} from './photoboard.component'

export const routes:RouterConfig = [

	{path:'', component: AboutComponent},
	{path:'gallery', component: RacesComponent},
	{path:'photo', component: PhotosComponent}

]

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
]
