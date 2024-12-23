In React Router Dom v6, attempting to access the `useParams()` hook outside of a component using `Route` or `Routes` will result in an error.  This is because `useParams()` relies on the routing context provided by these components.  For example, this will cause an error:

```javascript
import { useParams } from 'react-router-dom';

const myVariable = useParams(); // Error!
```

The error message might vary slightly depending on the React version, but it will indicate that `useParams` is being used incorrectly.