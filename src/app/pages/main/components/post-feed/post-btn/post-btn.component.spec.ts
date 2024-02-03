import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBtnComponent } from './post-btn.component';

describe('PostBtnComponent', () => {
  let component: PostBtnComponent;
  let fixture: ComponentFixture<PostBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
