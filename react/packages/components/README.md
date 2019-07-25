https://reactjs.org/warnings/invalid-hook-call-warning.html

This problem can also come up when you use npm link or an equivalent. In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming myapp and mylib are sibling folders, one possible fix is to run npm link ../myapp/node_modules/react from mylib. This should make the library use the application’s React copy.

from myapp call

npm dedupe

to remove duplicates of material ui (and others) but removes also storybook f.ex.
