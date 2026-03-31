import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import Alert from "../components/Alert";

export default function UIKit() {
  const [showError, setShowError] = useState(true);

  return (
    <div className="min-h-screen space-y-12 bg-white p-8 dark:bg-gray-950">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        UI Kit
      </h1>

      <section className="space-y-4">
        <h2 className="border-b pb-2 text-2xl font-semibold text-gray-900 dark:text-white">
          Buttons
        </h2>

        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        <div className="flex flex-wrap items-end gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <section className="max-w-md space-y-4">
        <h2 className="border-b pb-2 text-2xl font-semibold text-gray-900 dark:text-white">
          Inputs
        </h2>

        <Input id="ui-name" label="Normal Input" placeholder="Bir şey yazın..." />
        <Input id="ui-error" label="Hatalı Input" error="Bu alan zorunludur." />
        <Input
          id="ui-help"
          label="Help Text"
          type="email"
          helpText="E-posta adresinizi girin"
        />
        <Input id="ui-disabled" label="Disabled" disabled value="Düzenlenemez" />
      </section>

      <section className="space-y-4">
        <h2 className="border-b pb-2 text-2xl font-semibold text-gray-900 dark:text-white">
          Cards
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card variant="elevated" title="Elevated Card">
            Gölge ile yükseltilmiş kart.
          </Card>

          <Card variant="outlined" title="Outlined Card">
            Çerçeveli kart.
          </Card>

          <Card
            variant="filled"
            title="Filled Card"
            footer={<Button size="sm">Detay</Button>}
          >
            Dolgulu arka plan.
          </Card>
        </div>
      </section>

      <section className="max-w-xl space-y-4">
        <h2 className="border-b pb-2 text-2xl font-semibold text-gray-900 dark:text-white">
          Alerts
        </h2>

        <Alert variant="info" title="Bilgi">
          Bilgilendirme mesajı.
        </Alert>

        <Alert variant="success" title="Başarılı">
          İşlem tamamlandı.
        </Alert>

        <Alert variant="warning" title="Uyarı">
          Dikkat edilmesi gereken durum.
        </Alert>

        {showError && (
          <Alert
            variant="error"
            title="Hata"
            dismissible
            onDismiss={() => setShowError(false)}
          >
            Bağlantı kurulamadı. Tekrar deneyin.
          </Alert>
        )}
      </section>
    </div>
  );
}