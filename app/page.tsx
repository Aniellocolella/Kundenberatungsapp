import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="p-4">
      <Tabs defaultValue="vorsorge">
        <TabsList>
          <TabsTrigger value="vorsorge">Vorsorge</TabsTrigger>
          <TabsTrigger value="rente">Rente</TabsTrigger>
        </TabsList>
        <TabsContent value="vorsorge">
          <Card>
            <CardContent>
              <h1 className="text-xl font-bold mb-2">Vorsorge</h1>
              <Progress value={50} />
              <Button>Klick mich</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rente">
          <Card>
            <CardContent>Details zur Rente</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}