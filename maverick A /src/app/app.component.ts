import {
  Component, Inject, ViewChild,
  ElementRef, AfterViewInit, OnDestroy, OnInit
} from '@angular/core';

import { Masonry } from './masonry/masonry-token';
import { MasonryOptions } from './masonry/masonry-options.model';
import { MasonryInstance } from './masonry/masonry-instance.model';
import { cards } from './cards';
import { CategoryUrlsService } from './category-urls.service';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'app';
}
