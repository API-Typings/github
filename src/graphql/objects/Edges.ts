import type { Nullable } from 'extended-utility-types';
import type {
	BranchProtectionRule,
	BranchProtectionRuleConflict,
	CheckAnnotation,
	CheckRun,
	CheckSuite,
	Commit,
	CommitComment,
	CreatedCommitContribution,
	CreatedIssueContribution,
	CreatedPullRequestContribution,
	CreatedPullRequestReviewContribution,
	CreatedRepositoryContribution,
	CWE,
	DeployKey,
	Deployment,
	DeploymentStatus,
	EnterpriseAdministratorInvitation,
	EnterpriseAdministratorRole,
	EnterpriseMember,
	EnterpriseRepositoryInfo,
	EnterpriseRepositoryInfoConnection,
	EnterpriseServerInstallation,
	EnterpriseServerUserAccount,
	EnterpriseServerUserAccountEmail,
	EnterpriseServerUserAccountsUpload,
	EnterpriseUserAccount,
	EnterpriseUserAccountMembershipRole,
	ExternalIdentity,
	Gist,
	GistComment,
	GitActor,
	IpAllowListEntry,
	Issue,
	IssueComment,
	IssueTimelineItem,
	IssueTimelineItems,
	Label,
	Language,
	MarketplaceListing,
	MetaField,
	Milestone,
	Organization,
	OrganizationAuditEntry,
	OrganizationInvitation,
	OrganizationMemberRole,
	Package,
	PackageFile,
	PackageVersion,
	PermissionSource,
	PinnableItem,
	PinnedIssue,
	Project,
	ProjectCard,
	ProjectColumn,
	PublicKey,
	PullRequest,
	PullRequestChangedFile,
	PullRequestCommit,
	PullRequestReview,
	PullRequestReviewComment,
	PullRequestReviewThread,
	PullRequestTimelineItem,
	PullRequestTimelineItems,
	PushAllowance,
	Reaction,
	Ref,
	Release,
	ReleaseAsset,
	Repository,
	RepositoryInvitation,
	RepositoryPermission,
	RepositoryTopic,
	RepositoryVulnerabilityAlert,
	ReviewDismissalAllowance,
	ReviewRequest,
	SavedReply,
	SearchResultItem,
	SecurityAdvisory,
	SecurityVulnerability,
	SponsorableItem,
	Sponsorship,
	SponsorsTier,
	StatusCheckRollupContext,
	Submodule,
	Team,
	TeamDiscussion,
	TeamDiscussionComment,
	TeamMemberRole,
	TextMatch,
	User,
	UserContentEdit,
	UserStatus,
	VerifiableDomain
} from '../';

export interface Edge<T> {
	/**
	 * A cursor for use in pagination.
	 */
	cursor: string;

	/**
	 * The item at the end of the edge.
	 */
	node?: Nullable<T>;
}

export type BranchProtectionRuleConflictEdge = Edge<BranchProtectionRuleConflict> &
	MetaField<'BranchProtectionRuleConflictEdge'>;

export type BranchProtectionRuleEdge = Edge<BranchProtectionRule> & MetaField<'BranchProtectionRuleEdge'>;

export type CWEEdge = Edge<CWE> & MetaField<'CWEEdge'>;

export type CheckAnnotationEdge = Edge<CheckAnnotation> & MetaField<'CheckAnnotationEdge'>;

export type CheckRunEdge = Edge<CheckRun> & MetaField<'CheckRunEdge'>;

export type CheckSuiteEdge = Edge<CheckSuite> & MetaField<'CheckSuiteEdge'>;

export type CommitCommentEdge = Edge<CommitComment> & MetaField<'CommitCommentEdge'>;

export type CommitEdge = Edge<Commit> & MetaField<'CommitEdge'>;

export type CreatedCommitContributionEdge = Edge<CreatedCommitContribution> &
	MetaField<'CreatedCommitContributionEdge'>;

export type CreatedIssueContributionEdge = Edge<CreatedIssueContribution> & MetaField<'CreatedIssueContributionEdge'>;

export type CreatedPullRequestContributionEdge = Edge<CreatedPullRequestContribution> &
	MetaField<'CreatedPullRequestContributionEdge'>;

export type CreatedPullRequestReviewContributionEdge = Edge<CreatedPullRequestReviewContribution> &
	MetaField<'CreatedPullRequestReviewContributionEdge'>;

export type CreatedRepositoryContributionEdge = Edge<CreatedRepositoryContribution> &
	MetaField<'CreatedRepositoryContributionEdge'>;

export type DeployKeyEdge = Edge<DeployKey> & MetaField<'DeployKeyEdge'>;

export type DeploymentEdge = Edge<Deployment> & MetaField<'DeploymentEdge'>;

export type DeploymentStatusEdge = Edge<DeploymentStatus> & MetaField<'DeploymentStatusEdge'>;

export interface EnterpriseAdministratorEdge extends Edge<User>, MetaField<'EnterpriseAdministratorEdge'> {
	/**
	 * The role of the administrator.
	 */
	role: EnterpriseAdministratorRole;
}

export type EnterpriseAdministratorInvitationEdge = Edge<EnterpriseAdministratorInvitation> &
	MetaField<'EnterpriseAdministratorInvitationEdge'>;

export type EnterpriseMemberEdge = Edge<EnterpriseMember> & MetaField<'EnterpriseMemberEdge'>;

export interface EnterpriseOrganizationMembershipEdge
	extends Edge<Organization>,
		MetaField<'EnterpriseOrganizationMembershipEdge'> {
	/**
	 * The role of the user in the enterprise membership.
	 */
	role: EnterpriseUserAccountMembershipRole;
}

export interface EnterpriseOutsideCollaboratorEdge extends Edge<User>, MetaField<'EnterpriseOutsideCollaboratorEdge'> {
	/**
	 * The enterprise organization repositories this user is a member of.
	 */
	repositories: EnterpriseRepositoryInfoConnection;
}

export interface EnterprisePendingCollaboratorEdge extends Edge<User>, MetaField<'EnterprisePendingCollaboratorEdge'> {
	/**
	 * The enterprise organization repositories this user is a member of.
	 */
	repositories: EnterpriseRepositoryInfoConnection;
}

export type EnterprisePendingMemberInvitationEdge = Edge<OrganizationInvitation> &
	MetaField<'EnterprisePendingMemberInvitationEdge'>;

export type EnterpriseRepositoryInfoEdge = Edge<EnterpriseRepositoryInfo> & MetaField<'EnterpriseRepositoryInfoEdge'>;

export type EnterpriseServerInstallationEdge = Edge<EnterpriseServerInstallation> &
	MetaField<'EnterpriseServerInstallationEdge'>;

export type EnterpriseServerUserAccountEdge = Edge<EnterpriseServerUserAccount> &
	MetaField<'EnterpriseServerUserAccountEdge'>;

export type EnterpriseServerUserAccountEmailEdge = Edge<EnterpriseServerUserAccountEmail> &
	MetaField<'EnterpriseServerUserAccountEmailEdge'>;

export type EnterpriseServerUserAccountsUploadEdge = Edge<EnterpriseServerUserAccountsUpload> &
	MetaField<'EnterpriseServerUserAccountsUploadEdge'>;

export type EnterpriseUserAccountEdge = Edge<EnterpriseUserAccount> & MetaField<'EnterpriseUserAccountEdge'>;

export type ExternalIdentityEdge = Edge<ExternalIdentity> & MetaField<'ExternalIdentityEdge'>;

export type GistCommentEdge = Edge<GistComment> & MetaField<'GistCommentEdge'>;

export type GistEdge = Edge<Gist> & MetaField<'GistEdge'>;

export type GitActorEdge = Edge<GitActor> & MetaField<'GitActorEdge'>;

export type IpAllowListEntryEdge = Edge<IpAllowListEntry> & MetaField<'IpAllowListEntryEdge'>;

export type IssueCommentEdge = Edge<IssueComment> & MetaField<'IssueCommentEdge'>;

export type IssueEdge = Edge<Issue> & MetaField<'IssueEdge'>;

export type IssueTimelineItemEdge = Edge<IssueTimelineItem> & MetaField<'IssueTimelineItemEdge'>;

export type IssueTimelineItemsEdge = Edge<IssueTimelineItems> & MetaField<'IssueTimelineItemsEdge'>;

export type LabelEdge = Edge<Label> & MetaField<'LabelEdge'>;

export interface LanguageEdge extends Required<NonNullable<Edge<Language>>>, MetaField<'LanguageEdge'> {
	/**
	 * The number of bytes of code written in the language.
	 */
	size: number;
}

export type MarketplaceListingEdge = Edge<MarketplaceListing> & MetaField<'MarketplaceListingEdge'>;

export type MilestoneEdge = Edge<Milestone> & MetaField<'MilestoneEdge'>;

export type OrganizationAuditEntryEdge = Edge<OrganizationAuditEntry> & MetaField<'OrganizationAuditEntryEdge'>;

export type OrganizationEdge = Edge<Organization> & MetaField<'OrganizationEdge'>;

export type OrganizationInvitationEdge = Edge<OrganizationInvitation> & MetaField<'OrganizationInvitationEdge'>;

export interface OrganizationMemberEdge extends Edge<User>, MetaField<'OrganizationMemberEdge'> {
	/**
	 * Whether the organization member has two factor enabled or not. Returns `null` if information
	 * is not available to viewer.
	 */
	hasTwoFactorEnabled?: Nullable<boolean>;

	/**
	 * The role this user has in the organization.
	 */
	role?: Nullable<OrganizationMemberRole>;
}

export type PackageEdge = Edge<Package> & MetaField<'PackageEdge'>;

export type PackageFileEdge = Edge<PackageFile> & MetaField<'PackageFileEdge'>;

export type PackageVersionEdge = Edge<PackageVersion> & MetaField<'PackageVersionEdge'>;

export type PinnableItemEdge = Edge<PinnableItem> & MetaField<'PinnableItemEdge'>;

export type PinnedIssueEdge = Edge<PinnedIssue> & MetaField<'PinnedIssueEdge'>;

export type ProjectCardEdge = Edge<ProjectCard> & MetaField<'ProjectCardEdge'>;

export type ProjectColumnEdge = Edge<ProjectColumn> & MetaField<'ProjectColumnEdge'>;

export type ProjectEdge = Edge<Project> & MetaField<'ProjectEdge'>;

export type PublicKeyEdge = Edge<PublicKey> & MetaField<'PublicKeyEdge'>;

export type PullRequestChangedFileEdge = Edge<PullRequestChangedFile> & MetaField<'PullRequestChangedFileEdge'>;

export type PullRequestCommitEdge = Edge<PullRequestCommit> & MetaField<'PullRequestCommitEdge'>;

export type PullRequestEdge = Edge<PullRequest> & MetaField<'PullRequestEdge'>;

export type PullRequestReviewCommentEdge = Edge<PullRequestReviewComment> & MetaField<'PullRequestReviewCommentEdge'>;

export type PullRequestReviewEdge = Edge<PullRequestReview> & MetaField<'PullRequestReviewEdge'>;

export type PullRequestReviewThreadEdge = Edge<PullRequestReviewThread> & MetaField<'PullRequestReviewThreadEdge'>;

export type PullRequestTimelineItemEdge = Edge<PullRequestTimelineItem> & MetaField<'PullRequestTimelineItemEdge'>;

export type PullRequestTimelineItemsEdge = Edge<PullRequestTimelineItems> & MetaField<'PullRequestTimelineItemsEdge'>;

export type PushAllowanceEdge = Edge<PushAllowance> & MetaField<'PushAllowanceEdge'>;

export interface ReactingUserEdge extends Required<NonNullable<Edge<User>>>, MetaField<'ReactingUserEdge'> {
	/**
	 * The moment when the user made the reaction.
	 */
	reactedAt: string;
}

export type ReactionEdge = Edge<Reaction> & MetaField<'ReactionEdge'>;

export type RefEdge = Edge<Ref> & MetaField<'RefEdge'>;

export type ReleaseAssetEdge = Edge<ReleaseAsset> & MetaField<'ReleaseAssetEdge'>;

export type ReleaseEdge = Edge<Release> & MetaField<'ReleaseEdge'>;

export interface RepositoryCollaboratorEdge
	extends Required<NonNullable<Edge<User>>>,
		MetaField<'RepositoryCollaboratorEdge'> {
	/**
	 * The permission the user has on the repository.
	 */
	permission: RepositoryPermission;

	/**
	 * A list of sources for the user's access to the repository.
	 */
	permissionSources?: Nullable<PermissionSource[]>;
}

export type RepositoryEdge = Edge<Repository> & MetaField<'RepositoryEdge'>;

export type RepositoryInvitationEdge = Edge<RepositoryInvitation> & MetaField<'RepositoryInvitationEdge'>;

export type RepositoryTopicEdge = Edge<RepositoryTopic> & MetaField<'RepositoryTopicEdge'>;

export type RepositoryVulnerabilityAlertEdge = Edge<RepositoryVulnerabilityAlert> &
	MetaField<'RepositoryVulnerabilityAlertEdge'>;

export type ReviewDismissalAllowanceEdge = Edge<ReviewDismissalAllowance> & MetaField<'ReviewDismissalAllowanceEdge'>;

export type ReviewRequestEdge = Edge<ReviewRequest> & MetaField<'ReviewRequestEdge'>;

export type SavedReplyEdge = Edge<SavedReply> & MetaField<'SavedReplyEdge'>;

export interface SearchResultItemEdge extends Edge<SearchResultItem>, MetaField<'SearchResultItemEdge'> {
	/**
	 * Text matches on the result found.
	 */
	textMatches?: Nullable<Nullable<TextMatch>[]>;
}

export type SecurityAdvisoryEdge = Edge<SecurityAdvisory> & MetaField<'SecurityAdvisoryEdge'>;

export type SecurityVulnerabilityEdge = Edge<SecurityVulnerability> & MetaField<'SecurityVulnerabilityEdge'>;

export type SponsorableItemEdge = Edge<SponsorableItem> & MetaField<'SponsorableItemEdge'>;

export type SponsorsTierEdge = Edge<SponsorsTier> & MetaField<'SponsorsTierEdge'>;

export type SponsorshipEdge = Edge<Sponsorship> & MetaField<'SponsorshipEdge'>;

export interface StargazerEdge extends Required<NonNullable<Edge<User>>>, MetaField<'StargazerEdge'> {
	/**
	 * Identifies when the item was starred.
	 */
	starredAt: string;
}

export interface StarredRepositoryEdge
	extends Required<NonNullable<Edge<Repository>>>,
		MetaField<'StarredRepositoryEdge'> {
	/**
	 * Identifies when the item was starred.
	 */
	starredAt: string;
}

export type StatusCheckRollupContextEdge = Edge<StatusCheckRollupContext> & MetaField<'StatusCheckRollupContextEdge'>;

export type SubmoduleEdge = Edge<Submodule> & MetaField<'SubmoduleEdge'>;

export type TeamDiscussionCommentEdge = Edge<TeamDiscussionComment> & MetaField<'TeamDiscussionCommentEdge'>;

export type TeamDiscussionEdge = Edge<TeamDiscussion> & MetaField<'TeamDiscussionEdge'>;

export type TeamEdge = Edge<Team> & MetaField<'TeamEdge'>;

export interface TeamMemberEdge extends Required<NonNullable<Edge<User>>>, MetaField<'TeamMemberEdge'> {
	/**
	 * The HTTP path to the organization's member access page.
	 */
	memberAccessResourcePath: string;

	/**
	 * The HTTP URL to the organization's member access page.
	 */
	memberAccessUrl: string;

	/**
	 * The role the member has on the team.
	 */
	role: TeamMemberRole;
}

export interface TeamRepositoryEdge extends Required<NonNullable<Edge<Repository>>>, MetaField<'TeamRepositoryEdge'> {
	/**
	 * The permission level the team has on the repository
	 */
	permission: RepositoryPermission;
}

export type UserContentEditEdge = Edge<UserContentEdit> & MetaField<'UserContentEditEdge'>;

export type UserEdge = Edge<User> & MetaField<'UserEdge'>;

export type UserStatusEdge = Edge<UserStatus> & MetaField<'UserStatusEdge'>;

export type VerifiableDomainEdge = Edge<VerifiableDomain> & MetaField<'VerifiableDomainEdge'>;
