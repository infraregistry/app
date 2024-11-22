import type { Icon } from "$lib/shared/icons/repo";
import { icons } from "$lib/shared/icons/repo";

export enum IntegrationCategory {
  CLOUD = "cloud",
  API = "api",
  WEBHOOK = "webhook"
}

export enum IntegrationType {
  CLOUD_AWS = "cloud-aws",
  CLOUD_GCP = "cloud-gcp",
  CLOUD_AZURE = "cloud-azure",
  API = "api",
  WEBHOOK = "webhook"
}

export interface Integration {
  id: string;
  name: string;
  category: IntegrationCategory;
  type: IntegrationType;
  icon: Icon;
  installed?: boolean;
}

export const integrations: Integration[] = [
  {
    id: "aws",
    name: "Amazon Web Services",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AWS,
    icon: icons.aws
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_GCP,
    icon: icons.gcp
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AZURE,
    icon: icons.azure
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AWS,
    icon: icons.aws
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_GCP,
    icon: icons.gcp
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AZURE,
    icon: icons.azure
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AWS,
    icon: icons.aws
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_GCP,
    icon: icons.gcp
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AZURE,
    icon: icons.azure
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AWS,
    icon: icons.aws
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_GCP,
    icon: icons.gcp
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AZURE,
    icon: icons.azure
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AWS,
    icon: icons.aws
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_GCP,
    icon: icons.gcp
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AZURE,
    icon: icons.azure
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AWS,
    icon: icons.aws
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_GCP,
    icon: icons.gcp
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AZURE,
    icon: icons.azure
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AWS,
    icon: icons.aws
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_GCP,
    icon: icons.gcp
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AZURE,
    icon: icons.azure
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AWS,
    icon: icons.aws
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_GCP,
    icon: icons.gcp
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AZURE,
    icon: icons.azure
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AWS,
    icon: icons.aws
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_GCP,
    icon: icons.gcp
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AZURE,
    icon: icons.azure
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AWS,
    icon: icons.aws
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_GCP,
    icon: icons.gcp
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AZURE,
    icon: icons.azure
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AWS,
    icon: icons.aws
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_GCP,
    icon: icons.gcp
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AZURE,
    icon: icons.azure
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AWS,
    icon: icons.aws
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_GCP,
    icon: icons.gcp
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: IntegrationCategory.CLOUD,
    type: IntegrationType.CLOUD_AZURE,
    icon: icons.azure
  }
];

export const getIntegrationsByCategory = (category: IntegrationCategory) => {
  return integrations.filter((integration) => integration.category === category);
};
