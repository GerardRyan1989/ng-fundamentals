import {TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe} from '../shared';
import { CollapsibleWellComponent } from '../../common';
import { ISession } from '../shared';
import { By } from '@angular/platform-browser';


describe('SessionListComponent', () => {

  // tslint:disable-next-line:one-variable-per-declaration
  let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEL: DebugElement;

  beforeEach(async () => {
    const mockAuthService = {
        isAuthenticated: () => true,
        currentUser: { userName: 'Joe' }
      };
    const mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        DurationPipe,
    ],
      providers: [
        {provide: AuthService, useValue: mockAuthService },
        {provide: VoterService, useValue: mockVoterService}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEL = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should be the correct session title', () => {
      component.sessions = [{id: 3, name: 'Session 1',
        presenter: 'Joe', duration: 1, level: 'beginner',
        abstract: 'abstract', voters: ['john', 'bob']}];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      // both expects below, access and test the same value
      expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
      expect(debugEL.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');

    });
  });
});
