import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* // We deliberately hardcode the `bs-` prefix because we check
// this custom property in JS to determine Popper's positioning */}

@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-up($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    .dropdown-menu#{$infix}-start {
      --bs-position: start;

      &[data-bs-popper] {
        right: auto;
        left: 0;
      }
    }

    .dropdown-menu#{$infix}-end {
      --bs-position: end;

      &[data-bs-popper] {
        right: 0;
        left: auto;
      }
    }
  }
}
    </div>
  );
}

export default App;
