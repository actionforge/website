import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { getErrorMessage } from 'src/app/helper/utils';
import { JsonService } from 'src/app/services/json.service';
import { NotificationService, NotificationType } from 'src/app/services/notification.service';
import { environment } from 'src/environments/environment';

import { HTMLImgComparisonSliderElement } from 'img-comparison-slider';
import { cloudPosseSvg, codecovSvg, githubSvg, googleSvg, phpSvg, secureStackCoSvg, shundorSvg, trufflesecuritySvg } from './logos';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  jsonService = inject(JsonService)
  http = inject(HttpClient)
  ns = inject(NotificationService);
  es = inject(EmailService);

  @ViewChild('reimagined') reimagined!: ElementRef<HTMLElement>;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLElement>;

  @ViewChild('imgComparisionSlider') imgComparisionSlider!: ElementRef<HTMLImgComparisonSliderElement>;
  @ViewChild("ui") imgUi!: ElementRef<HTMLElement>;
  @ViewChild("workflow") imgWorkflow!: ElementRef<HTMLElement>;
  @ViewChild("ports") imgPorts!: ElementRef<HTMLElement>;

  ghActionItems = [
    {
      name: 'Download a Build Artifact', desc:
        'Download a build artifact that was previously uploaded in the workflow by the upload-artifact action',
      bglogo: "bg-[#0366d6]",
      logo: githubSvg,
      stars: "1.1k stars"

    },
    {
      name: 'Setup .NET Core SDK', desc:
        'Used to build and publish .NET source. Set up a specific version of the .NET and authentication to private NuGet repository',
      bglogo: "bg-[#0366d6]",
      logo: githubSvg,
      stars: "827 stars"
    },
    {
      name: 'Setup Go environment', desc:
        'Setup a Go environment and add it to the PATH environment variable.',
      bglogo: "bg-[#0366d6]",
      logo: githubSvg,
      stars: "1.2k stars"
    },
    {
      name: 'Upload a Build Artifact', desc:
        'Upload a build artifact that can be used by subsequent workflow steps',
      bglogo: "bg-[#0366d6]",
      logo: githubSvg,
      stars: "2.5k stars"
    },
    {
      name: 'Cache', desc:
        'Cache artifacts like dependencies and build outputs to improve workflow execution time',
      bglogo: "bg-[#0366d6]",
      logo: githubSvg,
      stars: "4.1k stars"
    },
    {
      name: 'SecureStack SBOM', desc:
        'Create a Software Bill of Materials (SBOM) with SecureStack',
      bglogo: "bg-white",
      logo: secureStackCoSvg,
    },
    {
      name: "ServiceNow ITSM Actions",
      desc: "ServiceNow ITSM Actions powered by Ansible",
      bglogo: "bg-[#f66a0a]",
      logo: shundorSvg,
    },
    {
      name: "TruffleHog OSS",
      desc: "Scan Github Actions with TruffleHog",
      bglogo: "bg-[#28a745]",
      logo: trufflesecuritySvg,
      stars: "12.6k stars"
    },
    {
      name: "Set up gcloud Cloud SDK",
      desc: "Downloads, installs, and configures a Google Cloud SDK environment.",
      bglogo: "bg-white",
      logo: googleSvg,
      stars: "1.6k stars"
    },
    {
      name: "Deploy HelmFile",
      desc: "Deploy on Kubernetes with HelmFile",
      bglogo: "bg-white",
      logo: cloudPosseSvg,
    },
    {
      name: "Setup PHP Action",
      desc: "GitHub Action for PHP",
      bglogo: "bg-[#6f42c1]",
      stars: "2.6k stars",
      logo: phpSvg,
    },
    {
      name: "Codecov | Code Coverage",
      desc: "Automatic test report merging for all CI and languages into a single code coverage report directly into your pull request",
      bglogo: "bg-[#FF0077]",
      logo: codecovSvg,
    }
  ];

  actionCode = `# Beginning of your workflow.yml
jobs:
  run-graph:
    - name: Build and deploy my app
    uses: actionforge/action@v1
    with: 
      graph_file: my-graph.yml
# End`;

  code = `- name: 📦 Cache node_modules and eslintcache
\t\t  uses: actions/cache@v2
\t\t    id: cache
  with:
    path: |
      **/node_modules
      **/.eslintcache

- name: ⬆️ Upgrade node-gyp
  shell: powershell
  run: |
        npm install --global node-gyp@9

- name: ⏩ Upgrade node-gyp
      run: |
            npm install --global node-gyp@9
            npm config set node_gyp $(npm prefix -g)/lib/node_modules/node-gyp/bin/node-gyp.js
  
    - name: 📥 Install dependencies
      if: steps.cache.outputs.cache-hit != 'true'
      run: npm ci

- name: 📦 Cache node_modules and eslintcache
  uses: actions/cache@v2
  id: cache
  with:
    path: |
      **/node_modules
      **/.eslintcache

- name: ⬆️ Upgrade node-gyp
  shell: powershell
  run: |
        npm install --global node-gyp@9

- name: ⏩ Upgrade node-gyp
      run: |
            npm install --global node-gyp@9
            npm config set node_gyp $(npm prefix -g)/lib/node_modules/node-gyp/bin/node-gyp.js
  
    - name: 📥 Install dependencies
      if: steps.cache.outputs.cache-hit != 'true'
      run: npm ci
`

  joinEmail = "";
  joined = false;

  leftSlider = 1.0;
  rightSlider = 0.0;

  onSlide(e: Event): void {
    if (e.target) {
      const target = e.target as HTMLImgComparisonSliderElement;
      this.leftSlider = target.value;
      this.rightSlider = (100 - target.value);
    }
  }

  typeCharacter(i: number, txt: string, speed: number) {
    if (i < txt.length) {
      this.reimagined.nativeElement.innerHTML += txt.charAt(i);
      i++;
      setTimeout(() => {
        this.typeCharacter(i, txt, speed);
      }, speed);
    } else {
      setTimeout(() => {
        this.reimagined.nativeElement.innerHTML += "."
      }, 1500);
    }
  }

  ngAfterViewInit(): void {
    const i = 0;
    const txt = 'reimagined';
    const speed = 100;

    setTimeout(() => {
      this.typeCharacter(i, txt, speed);
    }, 1250);
  }

  onClickScrollToSubscribeToNewsletter(_$event: Event): void {
    window.location.href = '#newsletter';
    this.emailInput.nativeElement.focus();
  }

  onClickOpenMarketplace(_$event: Event): void {
    window.open('https://marketplace.visualstudio.com/items?itemName=actionforge.actionforge', '_blank');
    this.onClickScrollToSubscribeToNewsletter(_$event);
  }

  onClickGitHub(_$event: Event): void {
    window.open('https://www.github.com/orgs/actionforge/repositories', '_blank');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(_event: Event) {
    function mapRange(value: number, oldMin: number, oldMax: number, newMin: number, newMax: number): number {
      return (newMax - newMin) * (value - oldMin) / (oldMax - oldMin) + newMin;
    }

    // Tilt the gh workflow image
    const imgGhActionTop = this.imgWorkflow.nativeElement.getBoundingClientRect().top;
    this.imgWorkflow.nativeElement.style.transform = `translateY(${Math.max(0, mapRange(window.innerHeight - imgGhActionTop, 0, window.innerHeight / 1.5, 200, 0))}px)`;

    // Tilt the ports image
    const imgPortsTop = this.imgPorts.nativeElement.getBoundingClientRect().top;
    this.imgPorts.nativeElement.style.transform = `translateY(${Math.max(0, mapRange(window.innerHeight - imgPortsTop, 0, window.innerHeight / 1.5, 200, 0))}px)`;

    // Tilt the UI screenshot
    const imgUiTop = this.imgUi.nativeElement.getBoundingClientRect().top;
    const imgDeg = mapRange(window.innerHeight - imgUiTop, 0, window.innerHeight / 1.5, 50, 0);
    this.imgUi.nativeElement.style.transform = `perspective(1000px) rotate3d(1, 0, 0, ${Math.max(0, imgDeg)}deg)`;
  }

  async onClickJoinNewsletter(_event: MouseEvent, email: string): Promise<void> {
    try {
      await this.http.post(`${environment.gatewayUrl}/api/v1/newsletter/signup`, { email }, {
        responseType: 'text',
        withCredentials: false
      }).toPromise()

      window.localStorage.setItem("newsletter-email", email); // if set, users signed up for newsletter
      this.joined = true;
      this.ns.showNotification(NotificationType.Success, "Thanks for joining!");

    } catch (err) {
      this.ns.showNotification(NotificationType.Error, getErrorMessage(err));
    }
  }
}
