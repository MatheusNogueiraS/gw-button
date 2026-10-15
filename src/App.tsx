import { GWButton } from './components/GWButton'
import type { GWButtonSize, GWButtonType } from './components/GWButton'
import './App.css'

const variants: GWButtonType[] = ['primary', 'secondary', 'label', 'link']
const sizes: GWButtonSize[] = ['small', 'medium', 'large']

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="row">
      <span className="row__title">{title}</span>
      <div className="row__items">{children}</div>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <h1>GWButton</h1>

      <section>
        <h2>Variants</h2>
        <Row title="regular">
          {variants.map((v) => (
            <GWButton key={v} variant={v}>
              Button
            </GWButton>
          ))}
        </Row>
        <Row title="disabled">
          {variants.map((v) => (
            <GWButton key={v} variant={v} disabled>
              Button
            </GWButton>
          ))}
        </Row>
        <Row title="loading">
          {variants.map((v) => (
            <GWButton key={v} variant={v} loading>
              Button
            </GWButton>
          ))}
        </Row>
        <Row title="processing">
          {variants.map((v) => (
            <GWButton key={v} variant={v} processing>
              Button
            </GWButton>
          ))}
        </Row>
      </section>

      <section>
        <h2>Sizes</h2>
        <Row title="primary">
          {sizes.map((s) => (
            <GWButton key={s} size={s}>
              {s}
            </GWButton>
          ))}
        </Row>
        <Row title="secondary">
          {sizes.map((s) => (
            <GWButton key={s} variant="secondary" size={s}>
              {s}
            </GWButton>
          ))}
        </Row>
      </section>

      <section>
        <h2>Icons</h2>
        <Row title="left / right">
          <GWButton iconLeft={<span>★</span>}>Favorite</GWButton>
          <GWButton variant="secondary" iconRight={<span>→</span>}>
            Continue
          </GWButton>
        </Row>
      </section>

      <section className="dark">
        <h2>Inverse</h2>
        <Row title="regular">
          {variants.map((v) => (
            <GWButton key={v} variant={v} inverse>
              Button
            </GWButton>
          ))}
        </Row>
        <Row title="disabled">
          {variants.map((v) => (
            <GWButton key={v} variant={v} inverse disabled>
              Button
            </GWButton>
          ))}
        </Row>
      </section>
    </main>
  )
}
