<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Card } from "$lib/components/ui/card";
  import { Input } from "$lib/components/ui/input";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
  import { X } from "lucide-svelte";

  let messages: { text: string; sender: "user" | "bot" }[] = [{ text: "Hello! How can I help you today?", sender: "bot" }];
  let newMessage = "";

  function sendMessage() {
    if (newMessage.trim()) {
      messages = [...messages, { text: newMessage, sender: "user" }];
      newMessage = "";
      // Simulate bot response
      setTimeout(() => {
        messages = [...messages, { text: "Thanks for your message. How else can I assist you?", sender: "bot" }];
      }, 1000);
    }
  }
</script>

<div class="fixed bottom-4 right-4 w-80">
  <Card class="shadow-lg">
    <div class="flex items-center justify-between border-b p-4">
      <h2 class="text-lg font-semibold">Chat Support</h2>
      <Button
        variant="ghost"
        size="icon"
        class="h-8 w-8 rounded-full">
        <X class="h-4 w-4" />
      </Button>
    </div>
    <ScrollArea class="h-96 p-4">
      {#each messages as message}
        <div class="mb-4 {message.sender === 'user' ? 'text-right' : 'text-left'}">
          <div
            class="inline-block bg-{message.sender === 'user' ? 'primary' : 'secondary'} text-{message.sender === 'user'
              ? 'primary'
              : 'secondary'}-foreground max-w-[80%] rounded-lg px-4 py-2">
            {message.text}
          </div>
        </div>
      {/each}
    </ScrollArea>
    <form
      on:submit|preventDefault={sendMessage}
      class="border-t p-4">
      <div class="flex gap-2">
        <Input
          bind:value={newMessage}
          placeholder="Type a message..."
          class="flex-grow" />
        <Button type="submit">Send</Button>
      </div>
    </form>
  </Card>
</div>
