"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const steps = [
  "Kundenprofil",
  "Sachversicherung",
  "Personenabsicherung",
  "Hinterbliebenenschutz",
  "Vermögen & Rente",
  "Zusammenfassung"
];

export default function KundenberatungApp() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const weiter = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      setProgress(((step + 1) / (steps.length - 1)) * 100);
    }
  };

  const zurueck = () => {
    if (step > 0) {
      setStep(step - 1);
      setProgress(((step - 1) / (steps.length - 1)) * 100);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return <CardContent><p>Kundenprofil: Alter, Beruf, Familie etc.</p></CardContent>;
      case 1:
        return (
          <Tabs defaultValue="Hausrat">
            <TabsList>
              <TabsTrigger value="Hausrat">Hausrat</TabsTrigger>
              <TabsTrigger value="Haftpflicht">Haftpflicht</TabsTrigger>
              <TabsTrigger value="Gebäude">Gebäude</TabsTrigger>
            </TabsList>
            <TabsContent value="Hausrat"><CardContent>Hausrat Rechner</CardContent></TabsContent>
            <TabsContent value="Haftpflicht"><CardContent>Haftpflicht Rechner</CardContent></TabsContent>
            <TabsContent value="Gebäude"><CardContent>Gebäude Rechner</CardContent></TabsContent>
          </Tabs>
        );
      case 2:
        return (
          <CardContent>
            <p>BU, Unfall, Pflege (Lückenrechner & Grafiken)</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={[{ name: "BU-Lücke", Betrag: 1200 }, { name: "Pflege", Betrag: 1800 }]}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Betrag" fill="#4f46e5" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        );
      case 3:
        return <CardContent><p>Hinterbliebenenschutz: RisikoLV Bedarf</p></CardContent>;
      case 4:
        return (
          <CardContent>
            <p>Rentenlücke & Altersvorsorge</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={[{ name: "GKV-Rente", Betrag: 1300 }, { name: "Soll-Rente", Betrag: 2500 }]}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Betrag" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        );
      case 5:
        return <CardContent><p>Zusammenfassung mit Empfehlungen</p></CardContent>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Kundenberatung: Vorsorge & Absicherung</h1>
      <Progress value={progress} className="h-3" />
      <Card><CardContent className="p-4"><h2 className="text-xl font-semibold mb-4">{steps[step]}</h2>{renderStepContent()}</CardContent></Card>
      <div className="flex justify-between">
        <Button onClick={zurueck} disabled={step === 0} variant="outline">Zurück</Button>
        <Button onClick={weiter} disabled={step === steps.length - 1}>Weiter</Button>
      </div>
    </div>
  );
}