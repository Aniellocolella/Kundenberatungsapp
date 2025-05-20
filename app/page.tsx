import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function HomePage() {
  return (
    <main className="p-4 space-y-4">
      <Tabs defaultValue="vorsorge">
        <TabsList>
          <TabsTrigger value="vorsorge">Vorsorge</TabsTrigger>
          <TabsTrigger value="versicherung">Versicherung</TabsTrigger>
        </TabsList>
        <TabsContent value="vorsorge">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">Vorsorgeübersicht</h2>
              <Progress value={60} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="versicherung">
          <Card>
            <CardContent>
              <p>Weitere Themen...</p>
              <Button>Beratung starten</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}