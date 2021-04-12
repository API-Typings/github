import type { Nullable } from 'extended-utility-types';
import type {
	CodeOfConduct,
	Enterprise,
	EnterpriseAdministratorInvitation,
	GitHubMetadata,
	License,
	MarketplaceCategory,
	MarketplaceListing,
	MarketplaceListingConnection,
	MetaField,
	Node,
	OrderBy,
	Organization,
	PagingArgs,
	RateLimit,
	Repository,
	RepositoryOwner,
	SearchResultItemConnection,
	SearchType,
	SecurityAdvisory,
	SecurityAdvisoryConnection,
	SecurityAdvisoryEcosystem,
	SecurityAdvisoryIdentifierFilter,
	SecurityAdvisoryOrder,
	SecurityAdvisoryOrderField,
	SecurityAdvisorySeverity,
	SecurityVulnerabilityConnection,
	SecurityVulnerabilityOrder,
	SecurityVulnerabilityOrderField,
	SponsorableItemConnection,
	SponsorableOrder,
	SponsorableOrderField,
	Topic,
	UniformResourceLocatable,
	User
} from './';

export interface Query extends MetaField<'Query'> {
	/**
	 * Look up Marketplace listings.
	 */
	marketplaceListings: MarketplaceListingConnection &
		((
			args: PagingArgs & {
				/**
				 * Select listings that can be administered by the specified user.
				 */
				adminId?: Nullable<string>;

				/**
				 * Select listings visible to the viewer even if they are not approved. If omitted
				 * or `false`, only approved listings will be returned.
				 */
				allStates?: Nullable<boolean>;

				/**
				 * Select only listings with the given category.
				 */
				categorySlug?: Nullable<string>;

				/**
				 * Select listings for products owned by the specified organization.
				 */
				organizationId?: Nullable<string>;

				/**
				 * Select only listings where the primary category matches the given category slug.
				 *
				 * @defaultValue false
				 */
				primaryCategoryOnly?: Nullable<boolean>;

				/**
				 * Select the listings with these slugs, if they are visible to the viewer.
				 */
				slug?: Nullable<Nullable<string>[]>;

				/**
				 * Also check topic aliases for the category slug.
				 */
				useTopicAliases?: Nullable<boolean>;

				/**
				 * Select listings to which user has admin access. If omitted, listings visible to
				 * the viewer are returned.
				 */
				viewerCanAdmin?: Nullable<boolean>;

				/**
				 * Select only listings that offer a free trial.
				 *
				 * @defaultValue false
				 */
				withFreeTrialsOnly?: Nullable<boolean>;
			}
		) => MarketplaceListingConnection);

	/**
	 * Perform a search across resources.
	 */
	search: SearchResultItemConnection &
		((
			args: PagingArgs & {
				/**
				 * The search string to look for.
				 */
				query: string;

				/**
				 * The types of search items to search within.
				 */
				type: SearchType;
			}
		) => SearchResultItemConnection);

	/**
	 * GitHub Security Advisories.
	 */
	securityAdvisories: SecurityAdvisoryConnection &
		((
			args: PagingArgs &
				OrderBy<SecurityAdvisoryOrderField, SecurityAdvisoryOrder> & {
					/**
					 * Filter advisories by identifier.
					 */
					identifier?: Nullable<SecurityAdvisoryIdentifierFilter>;

					/**
					 * Filter advisories to those published since a time in the past.
					 */
					publishedSince?: Nullable<string>;

					/**
					 * Filter advisories to those updated since a time in the past.
					 */
					updatedSince?: Nullable<string>;
				}
		) => SecurityAdvisoryConnection);

	/**
	 * Software Vulnerabilities documented by GitHub Security Advisories.
	 */
	securityVulnerabilities: SecurityVulnerabilityConnection &
		((
			args: PagingArgs &
				OrderBy<SecurityVulnerabilityOrderField, SecurityVulnerabilityOrder> & {
					/**
					 * An ecosystem to filter vulnerabilities by.
					 */
					ecosystem?: Nullable<SecurityAdvisoryEcosystem>;

					/**
					 * A package name to filter vulnerabilities by.
					 */
					package?: Nullable<string>;

					/**
					 * A list of severities to filter vulnerabilities by.
					 */
					severities?: Nullable<SecurityAdvisorySeverity[]>;
				}
		) => SecurityVulnerabilityConnection);

	/**
	 * Users and organizations who can be sponsored via GitHub Sponsors.
	 */
	sponsorables: SponsorableItemConnection &
		((
			args: PagingArgs &
				OrderBy<SponsorableOrderField, SponsorableOrder> & {
					/**
					 * Optional filter for which dependencies should be checked for sponsorable
					 * owners. Only sponsorable owners of dependencies in this ecosystem will be
					 * included. Used when `onlyDependencies = true`.
					 */
					dependencyEcosystem?: Nullable<SecurityAdvisoryEcosystem>;

					/**
					 * Whether only sponsorables who own the viewer's dependencies will be
					 * returned. Must be authenticated to use. Can check an organization instead
					 * for their dependencies owned by sponsorables by passing
					 * `orgLoginForDependencies`.
					 *
					 * @defaultValue false
					 */
					onlyDependencies?: Nullable<boolean>;

					/**
					 * Optional organization username for whose dependencies should be checked.
					 * Used when `onlyDependencies = true`. Omit to check your own dependencies.
					 * If you are not an administrator of the organization, only dependencies from
					 * its public repositories will be considered.
					 */
					orgLoginForDependencies?: Nullable<string>;
				}
		) => SponsorableItemConnection);

	/**
	 * Look up a code of conduct by its key.
	 */
	codeOfConduct?: Nullable<CodeOfConduct>;

	/**
	 * Look up a code of conduct by its key.
	 */
	codesOfConduct?: Nullable<Nullable<CodeOfConduct>[]>;

	/**
	 * Look up an enterprise by URL slug.
	 */
	enterprise?: Nullable<Enterprise>;

	/**
	 * Look up a pending enterprise administrator invitation by invitee, enterprise and role.
	 */
	enterpriseAdministratorInvitation?: Nullable<EnterpriseAdministratorInvitation>;

	/**
	 * Look up a pending enterprise administrator invitation by invitation token.
	 */
	enterpriseAdministratorInvitationByToken?: Nullable<EnterpriseAdministratorInvitation>;

	/**
	 * Look up an open source license by its key.
	 */
	license?: Nullable<License>;

	/**
	 * Return a list of known open source licenses.
	 */
	licenses: Nullable<License>[];

	/**
	 * Get alphabetically sorted list of Marketplace categories.
	 */
	marketplaceCategories: MarketplaceCategory[];

	/**
	 * Look up a Marketplace category by its slug.
	 */
	marketplaceCategory?: Nullable<MarketplaceCategory>;

	/**
	 * Look up a single Marketplace listing.
	 */
	marketplaceListing?: Nullable<MarketplaceListing>;

	/**
	 * Return information about the GitHub instance.
	 */
	meta: GitHubMetadata;

	/**
	 * Fetches an object given its ID.
	 */
	node?: Nullable<Node>;

	/**
	 * Lookup nodes by a list of IDs.
	 */
	nodes: Nullable<Node>[];

	/**
	 * Lookup a organization by login.
	 */
	organization?: Nullable<Organization>;

	/**
	 * The client's rate limit information.
	 */
	rateLimit?: Nullable<RateLimit>;

	/**
	 * Lookup a given repository by the owner and repository name.
	 */
	repository?: Nullable<Repository>;

	/**
	 * Lookup a repository owner (ie. either a User or an Organization) by login.
	 */
	repositoryOwner?: Nullable<RepositoryOwner>;

	/**
	 * Lookup resource by a URL.
	 */
	resource?: Nullable<UniformResourceLocatable>;

	/**
	 * Fetch a Security Advisory by its GHSA ID.
	 */
	securityAdvisory?: Nullable<SecurityAdvisory>;

	/**
	 * Look up a topic by name.
	 */
	topic?: Nullable<Topic>;

	/**
	 * Lookup a user by login.
	 */
	user?: Nullable<User>;

	/**
	 * The currently authenticated user.
	 */
	viewer: User;
}
