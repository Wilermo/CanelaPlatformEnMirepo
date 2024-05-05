import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PermisosUsuarioComponent } from './components/permisos-usuario/permisos-usuario.component';
import { GestionPlanesComponent } from './components/gestion-planes/gestion-planes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PerfilPersonalComponent } from './components/perfil-personal/perfil-personal.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { SuscripcionesComponent } from './components/suscripciones/suscripciones.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { PlanCrearComponent } from './components/plan-crear/plan-crear.component';
import { PlanEditarComponent } from './components/plan-editar/plan-editar.component';
import { CrearEmpresaComponent } from './components/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './components/editar-empresa/editar-empresa.component';
import { PerfilEditarComponent } from './components/perfil-editar/perfil-editar.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },

  {
    path: '', // Utiliza una ruta vacía como prefijo para las rutas con Navbar
    component: SlidebarComponent, // Este componente actúa como un layout
    children: [
      { path: 'canela/permisos', component: PermisosUsuarioComponent },
      { path: 'canela/planes', component: GestionPlanesComponent },
      { path: 'canela/usuarios', component: UsuariosComponent },
      { path: 'canela/perfil/view/:id', component: PerfilPersonalComponent },
      { path: 'canela/perfil/edit/:id', component: PerfilEditarComponent },
      { path: 'canela/suscripciones', component: SuscripcionesComponent },
      { path: 'canela/marketing', component: MarketingComponent },
      { path: 'canela/plan/edit/:id', component: PlanEditarComponent },
      { path: 'canela/plan/add', component: PlanCrearComponent },
      { path: 'canela/empresa/add', component: CrearEmpresaComponent },
      { path: 'canela/empresa/edit/:id', component: EditarEmpresaComponent },
    ],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
