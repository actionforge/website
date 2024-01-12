import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-graph-viewer',
  templateUrl: './graph-viewer.component.html',
  styleUrls: ['./graph-viewer.component.scss']
})
export class GraphViewerComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);

  error = '';
  owner = '';
  repo = '';
  ref = '';
  path = '';

  ngOnInit(): void {
    const re = /github\/(?<owner>[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38})\/(?<repo>[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38})\/(?<ref>.+)\/(?<path>.github\/.+\.yml)/;

    try {
      const components = re.exec(location.pathname);

      if (components) {
        const { owner, repo, ref, path } = components.groups as { [key: string]: string };
        if (!owner || !repo || !ref || !path) {
          throw new Error('invalid url');
        }

        this.owner = owner;
        this.repo = repo;
        this.ref = ref;
        this.path = path;
        this.error = '';
      }
    } catch (e) {
      this.error = 'invalid graph url';
      void this.router.navigate(['/404'], { skipLocationChange: true });
    }
  }

  getGraphUrl(): string {
    if (this.error || !this.owner || !this.repo || !this.ref || !this.path) {
      return "http://about:blank";
    }
    return `https://app.actionforge.dev/github/${this.owner}/${this.repo}/${this.ref}/${this.path}`;
  }
}
