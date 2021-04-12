import type {
	AcceptEnterpriseAdministratorInvitationPayload,
	AcceptTopicSuggestionPayload,
	AddAssigneesToAssignablePayload,
	AddCommentPayload,
	AddEnterpriseSupportEntitlementPayload,
	AddLabelsToLabelablePayload,
	AddProjectCardPayload,
	AddProjectColumnPayload,
	AddPullRequestReviewCommentPayload,
	AddPullRequestReviewPayload,
	AddPullRequestReviewThreadPayload,
	AddReactionPayload,
	AddStarPayload,
	AddVerifiableDomainPayload,
	ApproveVerifiableDomainPayload,
	ArchiveRepositoryPayload,
	CancelEnterpriseAdminInvitationPayload,
	ChangeUserStatusPayload,
	ClearLabelsFromLabelablePayload,
	CloneProjectPayload,
	CloneTemplateRepositoryPayload,
	CloseIssuePayload,
	ClosePullRequestPayload,
	ConvertProjectCardNoteToIssuePayload,
	CreateBranchProtectionRulePayload,
	CreateCheckRunPayload,
	CreateCheckSuitePayload,
	CreateContentAttachmentPayload,
	CreateDeploymentPayload,
	CreateDeploymentStatusPayload,
	CreateEnterpriseOrganizationPayload,
	CreateIpAllowListEntryPayload,
	CreateIssuePayload,
	CreateLabelPayload,
	CreateProjectPayload,
	CreatePullRequestPayload,
	CreateRefPayload,
	CreateRepositoryPayload,
	CreateTeamDiscussionCommentPayload,
	CreateTeamDiscussionPayload,
	DeclineTopicSuggestionPayload,
	DeleteBranchProtectionRulePayload,
	DeleteDeploymentPayload,
	DeleteIpAllowListEntryPayload,
	DeleteIssueCommentPayload,
	DeleteIssuePayload,
	DeleteLabelPayload,
	DeletePackageVersionPayload,
	DeleteProjectCardPayload,
	DeleteProjectColumnPayload,
	DeleteProjectPayload,
	DeletePullRequestReviewCommentPayload,
	DeletePullRequestReviewPayload,
	DeleteRefPayload,
	DeleteTeamDiscussionCommentPayload,
	DeleteTeamDiscussionPayload,
	DeleteVerifiableDomainPayload,
	DisablePullRequestAutoMergePayload,
	DismissPullRequestReviewPayload,
	EnablePullRequestAutoMergePayload,
	FollowUserPayload,
	ImportProjectPayload,
	InviteEnterpriseAdminPayload,
	LinkRepositoryToProjectPayload,
	LockLockablePayload,
	MarkFileAsViewedPayload,
	MarkPullRequestReadyForReviewPayload,
	MergeBranchPayload,
	MergePullRequestPayload,
	MetaField,
	MinimizeCommentPayload,
	MoveProjectCardPayload,
	MoveProjectColumnPayload,
	PinIssuePayload,
	RegenerateEnterpriseIdentityProviderRecoveryCodesPayload,
	RegenerateVerifiableDomainTokenPayload,
	RemoveAssigneesFromAssignablePayload,
	RemoveEnterpriseAdminPayload,
	RemoveEnterpriseIdentityProviderPayload,
	RemoveEnterpriseOrganizationPayload,
	RemoveEnterpriseSupportEntitlementPayload,
	RemoveLabelsFromLabelablePayload,
	RemoveOutsideCollaboratorPayload,
	RemoveReactionPayload,
	RemoveStarPayload,
	ReopenIssuePayload,
	ReopenPullRequestPayload,
	RequestReviewsPayload,
	RerequestCheckSuitePayload,
	ResolveReviewThreadPayload,
	SetEnterpriseIdentityProviderPayload,
	SetOrganizationInteractionLimitPayload,
	SetRepositoryInteractionLimitPayload,
	SetUserInteractionLimitPayload,
	SubmitPullRequestReviewPayload,
	TransferIssuePayload,
	UnarchiveRepositoryPayload,
	UnfollowUserPayload,
	UnlinkRepositoryFromProjectPayload,
	UnlockLockablePayload,
	UnmarkFileAsViewedPayload,
	UnmarkIssueAsDuplicatePayload,
	UnminimizeCommentPayload,
	UnpinIssuePayload,
	UnresolveReviewThreadPayload,
	UpdateBranchProtectionRulePayload,
	UpdateCheckRunPayload,
	UpdateCheckSuitePreferencesPayload,
	UpdateEnterpriseAdministratorRolePayload,
	UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload,
	UpdateEnterpriseDefaultRepositoryPermissionSettingPayload,
	UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload,
	UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload,
	UpdateEnterpriseMembersCanDeleteIssuesSettingPayload,
	UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload,
	UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload,
	UpdateEnterpriseMembersCanMakePurchasesSettingPayload,
	UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload,
	UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload,
	UpdateEnterpriseOrganizationProjectsSettingPayload,
	UpdateEnterpriseProfilePayload,
	UpdateEnterpriseRepositoryProjectsSettingPayload,
	UpdateEnterpriseTeamDiscussionsSettingPayload,
	UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload,
	UpdateIpAllowListEnabledSettingPayload,
	UpdateIpAllowListEntryPayload,
	UpdateIssueCommentPayload,
	UpdateIssuePayload,
	UpdateLabelPayload,
	UpdateNotificationRestrictionSettingPayload,
	UpdateProjectCardPayload,
	UpdateProjectColumnPayload,
	UpdateProjectPayload,
	UpdatePullRequestPayload,
	UpdatePullRequestReviewCommentPayload,
	UpdatePullRequestReviewPayload,
	UpdateRefPayload,
	UpdateRefsPayload,
	UpdateRepositoryPayload,
	UpdateSubscriptionPayload,
	UpdateTeamDiscussionCommentPayload,
	UpdateTeamDiscussionPayload,
	UpdateTeamReviewAssignmentPayload,
	UpdateTopicsPayload,
	VerifyVerifiableDomainPayload
} from '../';

export interface Mutation extends MetaField<'Mutation'> {
	/**
	 * Accepts a pending invitation for a user to become an administrator of an enterprise.
	 */
	acceptEnterpriseAdministratorInvitation: AcceptEnterpriseAdministratorInvitationPayload;

	/**
	 * Applies a suggested topic to the repository.
	 */
	acceptTopicSuggestion: AcceptTopicSuggestionPayload;

	/**
	 * Adds assignees to an assignable object.
	 */
	addAssigneesToAssignable: AddAssigneesToAssignablePayload;

	/**
	 * Adds a comment to an Issue or Pull Request.
	 */
	addComment: AddCommentPayload;

	/**
	 * Adds a support entitlement to an enterprise member.
	 */
	addEnterpriseSupportEntitlement: AddEnterpriseSupportEntitlementPayload;

	/**
	 * Adds labels to a labelable object.
	 */
	addLabelsToLabelable: AddLabelsToLabelablePayload;

	/**
	 * Adds a card to a ProjectColumn. Either `contentId` or `note` must be provided but **not**
	 * both.
	 */
	addProjectCard: AddProjectCardPayload;

	/**
	 * Adds a column to a Project.
	 */
	addProjectColumn: AddProjectColumnPayload;

	/**
	 * Adds a review to a Pull Request.
	 */
	addPullRequestReview: AddPullRequestReviewPayload;

	/**
	 * Adds a comment to a review.
	 */
	addPullRequestReviewComment: AddPullRequestReviewCommentPayload;

	/**
	 * Adds a new thread to a pending Pull Request Review.
	 */
	addPullRequestReviewThread: AddPullRequestReviewThreadPayload;

	/**
	 * Adds a reaction to a subject.
	 */
	addReaction: AddReactionPayload;

	/**
	 * Adds a star to a Starrable.
	 */
	addStar: AddStarPayload;

	/**
	 * Adds a verifiable domain to an owning account.
	 */
	addVerifiableDomain: AddVerifiableDomainPayload;

	/**
	 * Approve a verifiable domain for notification delivery.
	 */
	approveVerifiableDomain: ApproveVerifiableDomainPayload;

	/**
	 * Marks a repository as archived.
	 */
	archiveRepository: ArchiveRepositoryPayload;

	/**
	 * Cancels a pending invitation for an administrator to join an enterprise.
	 */
	cancelEnterpriseAdminInvitation: CancelEnterpriseAdminInvitationPayload;

	/**
	 * Update your status on GitHub.
	 */
	changeUserStatus: ChangeUserStatusPayload;

	/**
	 * Clears all labels from a labelable object.
	 */
	clearLabelsFromLabelable: ClearLabelsFromLabelablePayload;

	/**
	 * Creates a new project by cloning configuration from an existing project.
	 */
	cloneProject: CloneProjectPayload;

	/**
	 * Create a new repository with the same files and directory structure as a template repository.
	 */
	cloneTemplateRepository: CloneTemplateRepositoryPayload;

	/**
	 * Close an issue.
	 */
	closeIssue: CloseIssuePayload;

	/**
	 * Close a pull request.
	 */
	closePullRequest: ClosePullRequestPayload;

	/**
	 * Convert a project note card to one associated with a newly created issue.
	 */
	convertProjectCardNoteToIssue: ConvertProjectCardNoteToIssuePayload;

	/**
	 * Create a new branch protection rule.
	 */
	createBranchProtectionRule: CreateBranchProtectionRulePayload;

	/**
	 * Create a check run.
	 */
	createCheckRun: CreateCheckRunPayload;

	/**
	 * Create a check suite.
	 */
	createCheckSuite: CreateCheckSuitePayload;

	/**
	 * Create a content attachment.
	 */
	createContentAttachment: CreateContentAttachmentPayload;

	/**
	 * Creates a new deployment event.
	 */
	createDeployment: CreateDeploymentPayload;

	/**
	 * Create a deployment status.
	 */
	createDeploymentStatus: CreateDeploymentStatusPayload;

	/**
	 * Creates an organization as part of an enterprise account.
	 */
	createEnterpriseOrganization: CreateEnterpriseOrganizationPayload;

	/**
	 * Creates a new IP allow list entry.
	 */
	createIpAllowListEntry: CreateIpAllowListEntryPayload;

	/**
	 * Creates a new issue.
	 */
	createIssue: CreateIssuePayload;

	/**
	 * Creates a new label.
	 */
	createLabel: CreateLabelPayload;

	/**
	 * Creates a new project.
	 */
	createProject: CreateProjectPayload;

	/**
	 * Create a new pull request.
	 */
	createPullRequest: CreatePullRequestPayload;

	/**
	 * Create a new Git Ref.
	 */
	createRef: CreateRefPayload;

	/**
	 * Create a new repository.
	 */
	createRepository: CreateRepositoryPayload;

	/**
	 * Creates a new team discussion.
	 */
	createTeamDiscussion: CreateTeamDiscussionPayload;

	/**
	 * Creates a new team discussion comment.
	 */
	createTeamDiscussionComment: CreateTeamDiscussionCommentPayload;

	/**
	 * Rejects a suggested topic for the repository.
	 */
	declineTopicSuggestion: DeclineTopicSuggestionPayload;

	/**
	 * Delete a branch protection rule.
	 */
	deleteBranchProtectionRule: DeleteBranchProtectionRulePayload;

	/**
	 * Deletes a deployment.
	 */
	deleteDeployment: DeleteDeploymentPayload;

	/**
	 * Deletes an IP allow list entry.
	 */
	deleteIpAllowListEntry: DeleteIpAllowListEntryPayload;

	/**
	 * Deletes an Issue object.
	 */
	deleteIssue: DeleteIssuePayload;

	/**
	 * Deletes an IssueComment object.
	 */
	deleteIssueComment: DeleteIssueCommentPayload;

	/**
	 * Deletes a label.
	 */
	deleteLabel: DeleteLabelPayload;

	/**
	 * Delete a package version.
	 */
	deletePackageVersion: DeletePackageVersionPayload;

	/**
	 * Deletes a project.
	 */
	deleteProject: DeleteProjectPayload;

	/**
	 * Deletes a project card.
	 */
	deleteProjectCard: DeleteProjectCardPayload;

	/**
	 * Deletes a project column.
	 */
	deleteProjectColumn: DeleteProjectColumnPayload;

	/**
	 * Deletes a pull request review.
	 */
	deletePullRequestReview: DeletePullRequestReviewPayload;

	/**
	 * Deletes a pull request review comment.
	 */
	deletePullRequestReviewComment: DeletePullRequestReviewCommentPayload;

	/**
	 * Delete a Git Ref.
	 */
	deleteRef: DeleteRefPayload;

	/**
	 * Deletes a team discussion.
	 */
	deleteTeamDiscussion: DeleteTeamDiscussionPayload;

	/**
	 * Deletes a team discussion comment.
	 */
	deleteTeamDiscussionComment: DeleteTeamDiscussionCommentPayload;

	/**
	 * Deletes a verifiable domain.
	 */
	deleteVerifiableDomain: DeleteVerifiableDomainPayload;

	/**
	 * Disable auto merge on the given pull request.
	 */
	disablePullRequestAutoMerge: DisablePullRequestAutoMergePayload;

	/**
	 * Dismisses an approved or rejected pull request review.
	 */
	dismissPullRequestReview: DismissPullRequestReviewPayload;

	/**
	 * Enable the default auto-merge on a pull request.
	 */
	enablePullRequestAutoMerge: EnablePullRequestAutoMergePayload;

	/**
	 * Follow a user.
	 */
	followUser: FollowUserPayload;

	/**
	 * Creates a new project by importing columns and a list of issues/PRs.
	 */
	importProject: ImportProjectPayload;

	/**
	 * Invite someone to become an administrator of the enterprise.
	 */
	inviteEnterpriseAdmin: InviteEnterpriseAdminPayload;

	/**
	 * Creates a repository link for a project.
	 */
	linkRepositoryToProject: LinkRepositoryToProjectPayload;

	/**
	 * Lock a lockable object.
	 */
	lockLockable: LockLockablePayload;

	/**
	 * Mark a pull request file as viewed.
	 */
	markFileAsViewed: MarkFileAsViewedPayload;

	/**
	 * Marks a pull request ready for review.
	 */
	markPullRequestReadyForReview: MarkPullRequestReadyForReviewPayload;

	/**
	 * Merge a head into a branch.
	 */
	mergeBranch: MergeBranchPayload;

	/**
	 * Merge a pull request.
	 */
	mergePullRequest: MergePullRequestPayload;

	/**
	 * Minimizes a comment on an Issue, Commit, Pull Request, or Gist.
	 */
	minimizeComment: MinimizeCommentPayload;

	/**
	 * Moves a project card to another place.
	 */
	moveProjectCard: MoveProjectCardPayload;

	/**
	 * Moves a project column to another place.
	 */
	moveProjectColumn: MoveProjectColumnPayload;

	/**
	 * Pin an issue to a repository.
	 */
	pinIssue: PinIssuePayload;

	/**
	 * Regenerates the identity provider recovery codes for an enterprise.
	 */
	regenerateEnterpriseIdentityProviderRecoveryCodes: RegenerateEnterpriseIdentityProviderRecoveryCodesPayload;

	/**
	 * Regenerates a verifiable domain's verification token.
	 */
	regenerateVerifiableDomainToken: RegenerateVerifiableDomainTokenPayload;

	/**
	 * Removes assignees from an assignable object.
	 */
	removeAssigneesFromAssignable: RemoveAssigneesFromAssignablePayload;

	/**
	 * Removes an administrator from the enterprise.
	 */
	removeEnterpriseAdmin: RemoveEnterpriseAdminPayload;

	/**
	 * Removes the identity provider from an enterprise.
	 */
	removeEnterpriseIdentityProvider: RemoveEnterpriseIdentityProviderPayload;

	/**
	 * Removes an organization from the enterprise.
	 */
	removeEnterpriseOrganization: RemoveEnterpriseOrganizationPayload;

	/**
	 * Removes a support entitlement from an enterprise member.
	 */
	removeEnterpriseSupportEntitlement: RemoveEnterpriseSupportEntitlementPayload;

	/**
	 * Removes labels from a Labelable object.
	 */
	removeLabelsFromLabelable: RemoveLabelsFromLabelablePayload;

	/**
	 * Removes outside collaborator from all repositories in an organization.
	 */
	removeOutsideCollaborator: RemoveOutsideCollaboratorPayload;

	/**
	 * Removes a reaction from a subject.
	 */
	removeReaction: RemoveReactionPayload;

	/**
	 * Removes a star from a Starrable.
	 */
	removeStar: RemoveStarPayload;

	/**
	 * Reopen a issue.
	 */
	reopenIssue: ReopenIssuePayload;

	/**
	 * Reopen a pull request.
	 */
	reopenPullRequest: ReopenPullRequestPayload;

	/**
	 * Set review requests on a pull request.
	 */
	requestReviews: RequestReviewsPayload;

	/**
	 * Rerequests an existing check suite.
	 */
	rerequestCheckSuite: RerequestCheckSuitePayload;

	/**
	 * Marks a review thread as resolved.
	 */
	resolveReviewThread: ResolveReviewThreadPayload;

	/**
	 * Creates or updates the identity provider for an enterprise.
	 */
	setEnterpriseIdentityProvider: SetEnterpriseIdentityProviderPayload;

	/**
	 * Set an organization level interaction limit for an organization's public repositories.
	 */
	setOrganizationInteractionLimit: SetOrganizationInteractionLimitPayload;

	/**
	 * Sets an interaction limit setting for a repository.
	 */
	setRepositoryInteractionLimit: SetRepositoryInteractionLimitPayload;

	/**
	 * Set a user level interaction limit for an user's public repositories.
	 */
	setUserInteractionLimit: SetUserInteractionLimitPayload;

	/**
	 * Submits a pending pull request review.
	 */
	submitPullRequestReview: SubmitPullRequestReviewPayload;

	/**
	 * Transfer an issue to a different repository.
	 */
	transferIssue: TransferIssuePayload;

	/**
	 * Unarchives a repository.
	 */
	unarchiveRepository: UnarchiveRepositoryPayload;

	/**
	 * Unfollow a user.
	 */
	unfollowUser: UnfollowUserPayload;

	/**
	 * Deletes a repository link from a project.
	 */
	unlinkRepositoryFromProject: UnlinkRepositoryFromProjectPayload;

	/**
	 * Unlock a lockable object.
	 */
	unlockLockable: UnlockLockablePayload;

	/**
	 * Unmark a pull request file as viewed.
	 */
	unmarkFileAsViewed: UnmarkFileAsViewedPayload;

	/**
	 * Unmark an issue as a duplicate of another issue.
	 */
	unmarkIssueAsDuplicate: UnmarkIssueAsDuplicatePayload;

	/**
	 * Unminimizes a comment on an Issue, Commit, Pull Request, or Gist.
	 */
	unminimizeComment: UnminimizeCommentPayload;

	/**
	 * Unpin a pinned issue from a repository.
	 */
	unpinIssue: UnpinIssuePayload;

	/**
	 * Marks a review thread as unresolved.
	 */
	unresolveReviewThread: UnresolveReviewThreadPayload;

	/**
	 * Create a new branch protection rule.
	 */
	updateBranchProtectionRule: UpdateBranchProtectionRulePayload;

	/**
	 * Update a check run.
	 */
	updateCheckRun: UpdateCheckRunPayload;

	/**
	 * Modifies the settings of an existing check suite.
	 */
	updateCheckSuitePreferences: UpdateCheckSuitePreferencesPayload;

	/**
	 * Updates the role of an enterprise administrator.
	 */
	updateEnterpriseAdministratorRole: UpdateEnterpriseAdministratorRolePayload;

	/**
	 * Sets whether private repository forks are enabled for an enterprise.
	 */
	updateEnterpriseAllowPrivateRepositoryForkingSetting: UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload;

	/**
	 * Sets the default repository permission for organizations in an enterprise.
	 */
	updateEnterpriseDefaultRepositoryPermissionSetting: UpdateEnterpriseDefaultRepositoryPermissionSettingPayload;

	/**
	 * Sets whether organization members with admin permissions on a repository can change
	 * repository visibility.
	 */
	/* prettier-ignore */
	updateEnterpriseMembersCanChangeRepositoryVisibilitySetting:
		UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload;

	/**
	 * Sets the members can create repositories setting for an enterprise.
	 */
	updateEnterpriseMembersCanCreateRepositoriesSetting: UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload;

	/**
	 * Sets the members can delete issues setting for an enterprise.
	 */
	updateEnterpriseMembersCanDeleteIssuesSetting: UpdateEnterpriseMembersCanDeleteIssuesSettingPayload;

	/**
	 * Sets the members can delete repositories setting for an enterprise.
	 */
	updateEnterpriseMembersCanDeleteRepositoriesSetting: UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload;

	/**
	 * Sets whether members can invite collaborators are enabled for an enterprise.
	 */
	updateEnterpriseMembersCanInviteCollaboratorsSetting: UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload;

	/**
	 * Sets whether or not an organization admin can make purchases.
	 */
	updateEnterpriseMembersCanMakePurchasesSetting: UpdateEnterpriseMembersCanMakePurchasesSettingPayload;

	/**
	 * Sets the members can update protected branches setting for an enterprise.
	 */
	/* prettier-ignore */
	updateEnterpriseMembersCanUpdateProtectedBranchesSetting:
		UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload;

	/**
	 * Sets the members can view dependency insights for an enterprise.
	 */
	/* prettier-ignore */
	updateEnterpriseMembersCanViewDependencyInsightsSetting:
		UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload;

	/**
	 * Sets whether organization projects are enabled for an enterprise.
	 */
	updateEnterpriseOrganizationProjectsSetting: UpdateEnterpriseOrganizationProjectsSettingPayload;

	/**
	 * Updates an enterprise's profile.
	 */
	updateEnterpriseProfile: UpdateEnterpriseProfilePayload;

	/**
	 * Sets whether repository projects are enabled for a enterprise.
	 */
	updateEnterpriseRepositoryProjectsSetting: UpdateEnterpriseRepositoryProjectsSettingPayload;

	/**
	 * Sets whether team discussions are enabled for an enterprise.
	 */
	updateEnterpriseTeamDiscussionsSetting: UpdateEnterpriseTeamDiscussionsSettingPayload;

	/**
	 * Sets whether two factor authentication is required for all users in an enterprise.
	 */
	/* prettier-ignore */
	updateEnterpriseTwoFactorAuthenticationRequiredSetting:
		UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload;

	/**
	 * Sets whether an IP allow list is enabled on an owner.
	 */
	updateIpAllowListEnabledSetting: UpdateIpAllowListEnabledSettingPayload;

	/**
	 * Updates an IP allow list entry.
	 */
	updateIpAllowListEntry: UpdateIpAllowListEntryPayload;

	/**
	 * Updates an Issue.
	 */
	updateIssue: UpdateIssuePayload;

	/**
	 * Updates an IssueComment object.
	 */
	updateIssueComment: UpdateIssueCommentPayload;

	/**
	 * Updates an existing label.
	 */
	updateLabel: UpdateLabelPayload;

	/**
	 * Update the setting to restrict notifications to only verified domains available to an owner.
	 */
	updateNotificationRestrictionSetting: UpdateNotificationRestrictionSettingPayload;

	/**
	 * Updates an existing project.
	 */
	updateProject: UpdateProjectPayload;

	/**
	 * Updates an existing project card.
	 */
	updateProjectCard: UpdateProjectCardPayload;

	/**
	 * Updates an existing project column.
	 */
	updateProjectColumn: UpdateProjectColumnPayload;

	/**
	 * Update a pull request.
	 */
	updatePullRequest: UpdatePullRequestPayload;

	/**
	 * Updates the body of a pull request review.
	 */
	updatePullRequestReview: UpdatePullRequestReviewPayload;

	/**
	 * Updates a pull request review comment.
	 */
	updatePullRequestReviewComment: UpdatePullRequestReviewCommentPayload;

	/**
	 * Update a Git Ref.
	 */
	updateRef: UpdateRefPayload;

	/**
	 * Creates, updates and/or deletes multiple refs in a repository.
	 */
	updateRefs: UpdateRefsPayload;

	/**
	 * Update information about a repository.
	 */
	updateRepository: UpdateRepositoryPayload;

	/**
	 * Updates the state for subscribable subjects.
	 */
	updateSubscription: UpdateSubscriptionPayload;

	/**
	 * Updates a team discussion.
	 */
	updateTeamDiscussion: UpdateTeamDiscussionPayload;

	/**
	 * Updates a discussion comment.
	 */
	updateTeamDiscussionComment: UpdateTeamDiscussionCommentPayload;

	/**
	 * Updates team review assignment.
	 */
	updateTeamReviewAssignment: UpdateTeamReviewAssignmentPayload;

	/**
	 * Replaces the repository's topics with the given topics.
	 */
	updateTopics: UpdateTopicsPayload;

	/**
	 * Verify that a verifiable domain has the expected DNS record.
	 */
	verifyVerifiableDomain: VerifyVerifiableDomainPayload;
}
