
import PageA from './PageA'
import PageB from './PageB'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function App({ pageValue }:any) {
    if (pageValue == 0) {
        return <PageA />
    }

    if (pageValue == 1) {
        return <PageB />
    }
}

export default App
