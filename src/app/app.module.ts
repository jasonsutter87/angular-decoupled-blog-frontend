import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
// import { PostDetailComponent } from './post-detail/post-detail.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
    // PostDetailComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // BrowserAnimationsModule,
    HttpClientModule
  ],
  // providers: [DataService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
