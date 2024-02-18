import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { AppComponent } from './app.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

provideVSCodeDesignSystem().register(
  // vsCodeButton(),
  // TODO (Seb): I'm lazy, fix this
  allComponents
);

import {
  octTelescope,
  octThreeBars,
  octGift,
  octAlertFill,
  octCircleSlash,
  octCheckCircleFill,
  octLinkExternal,
  octLaw,
  octEye,
  octChecklist,
  octBellFill,
  octInfo,
  octRocket,
  octShieldCheck,
  octVerified,
  octPaperclip,
  octFeedMerged,
  octVersions,
  octDiffRemoved,
  octGitMerge,
  octChevronDown,
  octCodeSquare,
  octMarkGithub,
  octGitBranch,
  octCheck,
  octCode,
  octBlocked,
  octFeedForked,
  octLogoGithub,
  octLock,
  octFile,
  octFileAdded,
  octKey,
  octTerminal,
  octPencil,
  octCopy,
  octRepo,
  octRepoForked,
  octStar,
  octPlay,
  octDownload,
  octStarFill,
  octCpu,
  octQuestion,
  octDiffAdded,
  octBook,
  octFileDirectoryFill,
  octBroadcast,
  octHistory,
  octLightBulb,
  octMoon,
  octFeedDiscussion
} from '@ng-icons/octicons';

import {
  simpleGithub,
  simpleTwitter,
  simpleDiscord
} from '@ng-icons/simple-icons';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SanitizeHtmlPipe } from './pipe/sanitizer';
import { SafePipe } from './pipe/safe.pipe';
import { KeyPipe } from './pipe/key.pipe';
import { NotificationComponent } from './components/noitifcation/notification.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppButtonComponent } from './components/app-button/app-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { GraphViewerComponent } from './components/graph-viewer/graph-viewer.component';
import { Page404Component } from './components/page-404/page-404.componment';
import { allComponents, provideVSCodeDesignSystem } from '@vscode/webview-ui-toolkit';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    NotificationComponent,
    AppButtonComponent,
    FooterComponent,
    GraphViewerComponent,
    Page404Component,

    // Pipes
    SanitizeHtmlPipe,
    SafePipe,
    KeyPipe,
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({
      simpleGithub,
      simpleTwitter,
      simpleDiscord,

      octKey,
      octTerminal,
      octBlocked,
      octCheck,
      octGitBranch,
      octInfo,
      octAlertFill,
      octQuestion,
      octPaperclip,
      octFeedMerged,
      octPlay,
      octChecklist,
      octGitMerge,
      octCodeSquare,
      octFeedForked,
      octChevronDown,
      octLightBulb,
      octMoon,
      octFile,
      octFileAdded,
      octCode,
      octThreeBars,
      octBellFill,
      octCircleSlash,
      octCheckCircleFill,
      octLinkExternal,
      octLaw,
      octEye,
      octLogoGithub,
      octDiffRemoved,
      octMarkGithub,
      octBook,
      octLock,
      octFileDirectoryFill,
      octDiffAdded,
      octBroadcast,
      octHistory,
      octRocket,
      octShieldCheck,
      octVerified,
      octTelescope,
      octGift,
      octFeedDiscussion,
      octVersions,
      octPencil,
      octCopy,
      octRepo,
      octRepoForked,
      octCpu,
      octStar,
      octStarFill,
      octDownload,
    }),
    MatTooltipModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,

    // menu
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,

    HighlightModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          yaml: () => import('highlight.js/lib/languages/yaml'),
        },
      }
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
