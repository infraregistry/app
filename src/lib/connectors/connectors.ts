export type Connector = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  placeholder?: string;
  settings: Record<string, unknown>;
};

export const connectors: Connector[] = [
  {
    id: "azure",
    name: "Azure",
    description: `Connect to your Azure account by using a service principal. To create a service principal, run az ad sp create-for-rbac --name "My Service Principal".`,
    icon: "azure",
    color: "blue",
    placeholder: `{
  "appId": "43fa61e6-1aff-421d-acba-5b6a992c5992",
  "displayName": "My Service Principal",
  "tenant": "bc0d743r-af34-49b4-b8c9-81fcf1038434",
  "password": "soJ8Q~asdfaf3ag3g..r5nxyfEW_NhhcDN"
}`,
    settings: {
      appId: "43fa61e6-1aff-421d-acba-5b6a992c5992",
      displayName: "My Service Principal",
      tenant: "bc0d743r-af34-49b4-b8c9-81fcf1038281",
      password: "soJ8Q~asdfaf3ag3g..r5nxyfEW_NhhcDN",
    }
  },
  {
    id: "aws",
    name: "AWS",
    description: "Connect to your AWS account",
    icon: "aws",
    color: "orange",
    settings: {
      access_key_id: "xxx-xxx-xxxx-xxxx-xxxx",
      secret_access_key: "xxx-xxx-xxxx-xxxx-xxxx",
    }
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    description: "Connect to your Google Cloud Platform account",
    icon: "google",
    color: "blue",
    settings: {
      project_id: "xxx-xxx-xxxx-xxxx-xxxx",
      client_email: "xxx-xxx-xxxx-xxxx-xxxx",
      private_key: "xxx-xxx-xxxx-xxxx-xxxx",
    }
  }
];