import { MakeUrlPipe } from './make-url.pipe';

describe('MakeUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new MakeUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
